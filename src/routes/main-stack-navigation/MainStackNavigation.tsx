import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import TopBar from '../../components/TopBar';
import MainScreen from '../../Screens/MainScreen';
import RepoDetailsScreen from '../../Screens/RepoDetailsScreen';

const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="mainStack"
      screenOptions={{header: TopBar}}>
      <Stack.Screen name="mainStack" component={MainScreen} />
      <Stack.Screen name="repoDetails" component={RepoDetailsScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
