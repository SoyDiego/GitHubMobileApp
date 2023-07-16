import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import MainStackNavigation from '../../routes/main-stack-navigation/MainStackNavigation';
import SettingsScreen from '../../Screens/SettingsScreen/SettingsScreen';
import {NavigationContainer} from '@react-navigation/native';

const Tabs = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'mainStack',
      title: 'Repos',
      focusedIcon: 'github',
      unfocusedIcon: 'github',
    },
    {
      key: 'settings',
      title: 'Settings',
      focusedIcon: 'cog',
      unfocusedIcon: 'cog-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    mainStack: MainStackNavigation,
    settings: SettingsScreen,
  });

  return (
    <NavigationContainer>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </NavigationContainer>
  );
};

export default Tabs;
