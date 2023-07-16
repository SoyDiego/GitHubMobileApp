import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton, List, Switch, Text} from 'react-native-paper';
import Layout from '../../components/Layout/Layout';
import ThemeContext from '../../context/ThemeContext';

const SettingsScreen = () => {
  const {theme, updateTheme, themeLight, themeDark} = useContext(ThemeContext);

  const handleToggleTheme = () => {
    const newTheme = theme === themeDark ? themeLight : themeDark;
    updateTheme(newTheme);
  };

  return (
    <Layout>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <IconButton icon="cog" size={128} />
          <Text variant="headlineLarge">Settings</Text>
        </View>
        <List.Section>
          <List.Item
            title="Dark Mode"
            description="Enable dark mode"
            right={() => (
              <Switch
                value={theme === themeDark}
                onValueChange={handleToggleTheme}
              />
            )}
          />
        </List.Section>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
