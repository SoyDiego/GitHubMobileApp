import React from 'react';
import {Appbar} from 'react-native-paper';

const TopBar = ({navigation, route}) => {
  const {name, params} = route;
  const showBackButton = name !== 'mainStack';
  const title =
    name !== 'mainStack' ? `Details: ${params?.repo.name}` : 'GitHub App';

  return (
    <Appbar.Header>
      {showBackButton && (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      )}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default TopBar;
