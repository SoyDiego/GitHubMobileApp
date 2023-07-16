import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';

const Layout = ({children}) => {
  const {colors} = useTheme();

  return <View style={styles.container(colors.background)}>{children}</View>;
};

const styles = StyleSheet.create({
  container: backgroundColor => ({
    flex: 1,
    padding: 8,
    gap: 8,
  }),
});

export default Layout;
