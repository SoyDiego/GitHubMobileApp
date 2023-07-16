import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {IconButton, List, Text} from 'react-native-paper';
import Layout from '../../components/Layout/Layout';

const RepoDetailsScreen = ({route, navigation}) => {
  const {repo} = route.params;

  return (
    <Layout>
      <View style={styles.containerIconText}>
        <IconButton icon="source-repository" size={128} />
        <View style={styles.rightContainer}>
          <View style={styles.statContainer}>
            <Text style={styles.statText}>{repo.forks}</Text>
            <List.Icon icon="source-fork" />
          </View>
          <View style={styles.statContainer}>
            <Text style={styles.statText}>{repo.stargazers_count}</Text>
            <List.Icon icon="star-settings-outline" />
          </View>
        </View>
      </View>
      <ScrollView style={styles.containerInformationItems}>
        <List.Section>
          <List.Item
            title="Name"
            description={repo.name}
            left={() => <List.Icon icon="chevron-right" />}
          />
          <List.Item
            title="Description"
            description={repo.description}
            left={() => <List.Icon icon="chevron-right" />}
          />
          <List.Item
            title="Size"
            description={`${repo.size} KB`}
            left={() => <List.Icon icon="chevron-right" />}
          />
          <List.Item
            title="Language"
            description={repo.language}
            left={() => <List.Icon icon="chevron-right" />}
          />
          <List.Item
            title="Open Issues"
            description={repo.open_issues}
            left={() => <List.Icon icon="chevron-right" />}
          />
          <List.Item
            title="URL"
            description={repo.html_url}
            left={() => <List.Icon icon="chevron-right" />}
          />
        </List.Section>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  containerIconText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
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
  containerInformationItems: {
    flex: 300,
  },
});

export default RepoDetailsScreen;
