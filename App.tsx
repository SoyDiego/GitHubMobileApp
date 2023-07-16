import React, {useContext} from 'react';
import {ThemeProvider as PaperThemeProvider} from 'react-native-paper';
import ThemeContext, {ThemeProvider} from './src/context/ThemeContext';
import Tabs from './src/components/Tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function Main() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <ThemeWrapper />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

function ThemeWrapper() {
  const {theme} = useContext(ThemeContext);

  return (
    <PaperThemeProvider theme={theme}>
      <Tabs />
    </PaperThemeProvider>
  );
}
