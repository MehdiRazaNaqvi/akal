import PropTypes from 'prop-types';
import { useMemo } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
//
import palette from './palette';
import shadows from './shadows';
import typography from './typography';
import GlobalStyles from './globalStyles';
import customShadows from './customShadows';
import componentsOverride from './overrides';

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(
    () => ({
      // palette,


      palette: {
        mode: 'dark',
        primary: {
          main: '#90caf9', // Update with your primary color
        },
        secondary: {
          main: '#f48fb1', // Update with your secondary color
        },
        // Add any additional palette colors you want to customize
        // For example:
        background: {
          // paper: '#121212',
          paper: '#222',
          default: '#111',
        },
      },


      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
      customShadows: customShadows(),





    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
