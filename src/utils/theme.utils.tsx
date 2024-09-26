import { createTheme, Theme, ThemeProvider } from '@mui/material';
import theme from 'app/theme';
import { ThemeMode, ThemeModeSetting } from 'app/types';
import React, { ComponentType, useEffect, useMemo, useState } from 'react';

export const checkSystemThemeMode = (themeModeSetting?: ThemeModeSetting): ThemeMode => {
  if (themeModeSetting === 'system') {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark' as ThemeMode;
    } else {
      return 'light' as ThemeMode;
    }
  }
  return themeModeSetting as ThemeMode;
};

export const withThemeProvider =
  <T extends object>(WrappedComponent: ComponentType<T>): ComponentType<T> =>
  (props: T): React.JSX.Element => {
    const [themeModeSetting, setThemeModeSetting] = useState<ThemeModeSetting>(
      (localStorage.getItem('odb-web-theme-mode') as ThemeModeSetting) ?? 'system',
    );
    const [themeMode, setThemeMode] = useState<ThemeMode>();

    useEffect(() => {
      const themeModeSettingListener = (event) => {
        setThemeModeSetting(event.details.themeModeSetting);
      };
      window.addEventListener('OdbThemeModeSettingChanged', themeModeSettingListener);
      return () => {
        window.removeEventListener('OdbThemeModeSettingChanged', themeModeSettingListener);
      };
    }, []);

    useEffect(() => {
      setThemeMode(checkSystemThemeMode(themeModeSetting));
      const systemThemeModeListener = ({ matches }): void => {
        if (matches) {
          setThemeMode('dark');
        } else {
          setThemeMode('light');
        }
      };
      if (themeModeSetting === 'system') {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', systemThemeModeListener);
        return (): void => {
          window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', systemThemeModeListener);
        };
      } else {
        window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', systemThemeModeListener);
      }
    }, [themeModeSetting]);

    const muiTheme: Theme = useMemo(() => createTheme({ ...theme[themeMode] }), [themeMode]);

    return (
      <ThemeProvider theme={muiTheme}>
        <WrappedComponent {...props} />
      </ThemeProvider>
    );
  };
