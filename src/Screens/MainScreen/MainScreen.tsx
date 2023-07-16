import React, {useEffect, useState} from 'react';
import Layout from '../../components/Layout/Layout';
import {List, Searchbar, Text} from 'react-native-paper';
import useGitHubRepository from '../../hooks/useGitHubRepository/useGitHubRepository';
import {FlatList} from 'react-native';

const MainScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const {repository, repos, loading} =
    useGitHubRepository(debouncedSearchQuery);

  const onChangeSearch = text => {
    setSearchQuery(text);
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 700);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  if (loading) {
    return <Text>Loading</Text>;
  }

  return (
    <Layout>
      <Searchbar
        placeholder="Search for a repository: e.g. @facebook"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <List.Section>
        <List.Subheader>Showing {searchQuery}'s Repo</List.Subheader>
        {repos.length > 0 ? (
          <FlatList
            data={repos}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <List.Item
                key={item.id}
                title={item.name}
                description={item.description}
                left={() => <List.Icon icon="github" />}
              />
            )}
          />
        ) : (
          <Text>No repositories found</Text>
        )}
      </List.Section>
    </Layout>
  );
};
export default MainScreen;
