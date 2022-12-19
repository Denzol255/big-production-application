import { ReactNode, useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../lib/ThemeContext';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const defaultState =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, initialTheme } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultState);
  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );
  document.body.className = theme;

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
