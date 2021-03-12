import { ThemeProvider, ThemeType } from 'dooboo-ui';
import React from 'react';

import { dark, light } from '../utils/theme';
import { AppProvider } from './AppProvider';

interface Props {
  initialThemeType?: ThemeType;
  children?: React.ReactElement;
}

// Add providers here
const RootProvider = ({
  initialThemeType = ThemeType.LIGHT,
  children,
}: Props): React.ReactElement => {
  return (
    <ThemeProvider
      initialThemeType={initialThemeType}
      customTheme={{
        light,
        dark,
      }}>
      <AppProvider>{children}</AppProvider>
    </ThemeProvider>
  );
};

export default RootProvider;
