import { createContext } from 'react';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeContextType = {
  theme?: Theme;
  setTheme?: (mode: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({});
