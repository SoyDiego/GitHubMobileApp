import React from 'react';
import {Avatar, List} from 'react-native-paper';
import AvatarImage from 'react-native-paper/lib/typescript/src/components/Avatar/AvatarImage';

const Profile = ({url, name, description}) => {
  return (
    <List.Item
      title={name}
      titleStyle={{fontWeight: 'bold', marginBottom: 8}}
      description={description.trim()}
      left={() => <Avatar.Image source={{uri: url}} size={96} />}
    />
  );
};

export default Profile;
