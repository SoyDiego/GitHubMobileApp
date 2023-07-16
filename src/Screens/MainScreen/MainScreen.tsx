import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ActivityIndicator,
  IconButton,
  List,
  Searchbar,
  Text,
  useTheme,
} from 'react-native-paper';
import useGitHubRepository from '../../hooks/useGitHubRepository/useGitHubRepository';
import {FlatList} from 'react-native-gesture-handler';
import Profile from '../../components/Profile';
import Layout from '../../components/Layout/Layout';
import {useNavigation} from '@react-navigation/native';

const MainScreen = () => {
  const [searching, setSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const navigation = useNavigation();
  const {colors} = useTheme();
  const {repository, repos, loading} =
    useGitHubRepository(debouncedSearchQuery);

  const onChangeSearch = text => {
    if (text === '') {
      return;
    }

    setSearchQuery(text);
    setSearching(text !== '');
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  if (loading) {
    return (
      <View style={styles.loadingContainer(colors.surface)}>
        <ActivityIndicator animating={true} color="gray" size="large" />
      </View>
    );
  }

  return (
    <Layout>
      <Searchbar
        placeholder="Ex: @facebook"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      {searchQuery === '' && !searching ? (
        <View style={styles.containerIconText}>
          <IconButton icon="account-search-outline" size={128} />
          <Text variant="headlineSmall">Search a repository...</Text>
        </View>
      ) : !loading && repos.length > 0 ? (
        <>
          <Profile
            url={repository?.avatar_url}
            name={repository?.name}
            description={repository?.bio}
          />
          <List.Section>
            <List.Subheader>Repositories</List.Subheader>
            <FlatList
              data={repos}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <List.Item
                  key={item.id}
                  title={item.name}
                  description={item.description}
                  left={() => <List.Icon icon="source-repository-multiple" />}
                  // eslint-disable-next-line react/no-unstable-nested-components
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
                  onPress={() => {
                    navigation.navigate('repoDetails', {
                      repo: item,
                    });
                  }}
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
  loadingContainer: backgroundColor => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor,
  }),
});

export default MainScreen;
