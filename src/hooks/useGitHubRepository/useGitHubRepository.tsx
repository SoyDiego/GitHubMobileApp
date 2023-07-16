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
        const responseRepos = await fetch(
          `https://api.github.com/users/${owner}/repos`,
        );
        const data = await response.json();
        const dataRepos = await responseRepos.json();
        setRepository(data);
        setRepos(dataRepos);
      } catch (error) {
        console.error('Error fetching GitHub repository:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepository();
  }, [owner]);

  return {repository, repos, loading};
};

export default useGitHubRepository;
