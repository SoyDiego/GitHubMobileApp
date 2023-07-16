import React, {createContext, useState} from 'react';
import {useColorScheme} from 'react-native';
import {MD3DarkTheme, MD3LightTheme} from 'react-native-paper';
import {darkColors, lightColors} from '../utils/colors';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const colorScheme = useColorScheme();

  const themeDark = {
    ...MD3DarkTheme,
    colors: {
      ...darkColors,
    },
  };

  const themeLight = {
    ...MD3LightTheme,
    colors: {
      ...lightColors,
    },
  };

  const [theme, setTheme] = useState(
    colorScheme === 'dark' ? themeDark : themeLight,
  );

  const updateTheme = newTheme => {
    setTheme(newTheme === themeDark ? 'dark' : 'light');
  };

  const getTheme = () => {
    return theme === 'dark' ? themeDark : themeLight;
  };

  return (
    <ThemeContext.Provider
      value={{theme: getTheme(), updateTheme, themeLight, themeDark}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
