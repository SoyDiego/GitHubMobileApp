import React from 'react';
import {Appbar, IconButton} from 'react-native-paper';

const TopBar = () => {
  return (
    <Appbar.Header>
      <IconButton icon="github" size={32} />
      {/* <Appbar.BackAction onPress={() => {}} /> */}
      <Appbar.Content title="GitHub App" />
    </Appbar.Header>
  );
};

export default TopBar;
