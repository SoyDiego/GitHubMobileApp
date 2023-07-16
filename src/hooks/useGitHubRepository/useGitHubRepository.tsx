import {useState, useEffect} from 'react';

const useGitHubRepository = owner => {
  const [repository, setRepository] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepository = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${owner}`);
        const data = await response.json();
        setRepository(data);
      } catch (error) {
        console.error('Error fetching GitHub repository:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchRepositories = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${owner}/repos`,
        );
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepository();
    fetchRepositories();
  }, [owner]);

  return {repository, repos, loading};
};

export default useGitHubRepository;
