import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import Layout from '../../components/Layout/Layout';

const SettingsScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text variant="headlineLarge">Settings</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
