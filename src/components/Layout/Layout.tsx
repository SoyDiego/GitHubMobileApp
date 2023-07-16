import React from 'react';
import {StyleSheet, View} from 'react-native';

const Layout = ({children}) => {
  return <View style={style.container}>{children}</View>;
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    gap: 8,
  },
});

export default Layout;
