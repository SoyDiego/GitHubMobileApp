import React from 'react';
import {Appbar} from 'react-native-paper';

const TopBar = () => {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title="Repositories" />
    </Appbar.Header>
  );
};

export default TopBar;
