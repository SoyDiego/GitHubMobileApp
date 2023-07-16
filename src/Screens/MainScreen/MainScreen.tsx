/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';
import Layout from '../../components/Layout/Layout';
import {IconButton, List, Searchbar, Text} from 'react-native-paper';
import useGitHubRepository from '../../hooks/useGitHubRepository/useGitHubRepository';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import Profile from '../../components/Profile';

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

      {searchQuery === '' ? (
        <View style={styles.containerIconText}>
          <IconButton icon="account-search-outline" size={128} />
          <Text variant="headlineSmall">Search a repository to start...</Text>
        </View>
      ) : repos.length > 0 ? (
        <>
          <Profile
            url={repository?.avatar_url}
            name={repository?.name}
            description={repository?.bio}
          />
          <List.Section>
            <List.Subheader>Showing {searchQuery}'s Repos</List.Subheader>
            <FlatList
              data={repos}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <List.Item
                  key={item.id}
                  title={item.name}
                  description={item.description}
                  left={() => <List.Icon icon="source-repository-multiple" />}
                  right={() => (
                    <View style={styles.rightContainer}>
                      <View style={styles.statContainer}>
                        <Text style={styles.statText}>{item.forks}</Text>
                        <List.Icon icon="source-fork" />
                      </View>
                      <View style={styles.statContainer}>
                        <Text style={styles.statText}>
                          {item.stargazers_count}
                        </Text>
                        <List.Icon icon="star-settings-outline" />
                      </View>
                    </View>
                  )}
                />
              )}
            />
          </List.Section>
        </>
      ) : (
        <View style={styles.containerIconText}>
          <IconButton icon="emoticon-sad-outline" size={128} />
          <Text variant="headlineSmall">No repositories found</Text>
        </View>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  containerIconText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgNotFound: {
    width: 200,
    height: 200,
  },
  rightContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  statContainer: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  statText: {
    color: 'gray',
  },
});

export default MainScreen;
