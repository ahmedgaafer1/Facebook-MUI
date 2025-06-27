
import { createTheme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    facebook: {
      main: string;
      light: string;
      dark: string;
    };
  }

  interface PaletteOptions {
    facebook?: {
      main: string;
      light: string;
      dark: string;
    };
  }
}

const getDesignTokens = (mode: 'light' | 'dark'): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light mode colors
          primary: {
            main: '#1877f2',
            light: '#42a5f5',
            dark: '#0d47a1',
          },
          secondary: {
            main: '#f50057',
          },
          background: {
            default: '#f0f2f5',
            paper: '#ffffff',
          },
          text: {
            primary: '#1c1e21',
            secondary: '#65676b',
          },
          facebook: {
            main: '#1877f2',
            light: '#42a5f5',
            dark: '#0d47a1',
          },
        }
      : {
          // Dark mode colors
          primary: {
            main: '#2374e1',
            light: '#5b9bd5',
            dark: '#0e4f99',
          },
          secondary: {
            main: '#f50057',
          },
          background: {
            default: '#18191a',
            paper: '#242526',
          },
          text: {
            primary: '#e4e6ea',
            secondary: '#b0b3b8',
          },
          facebook: {
            main: '#2374e1',
            light: '#5b9bd5',
            dark: '#0e4f99',
          },
        }),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: mode === 'dark' ? '#3a3b3c' : '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: mode === 'dark' ? '#5a5b5c' : '#c1c1c1',
            borderRadius: '4px',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'dark' ? '#242526' : '#ffffff',
          color: mode === 'dark' ? '#e4e6ea' : '#1c1e21',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export const createCustomTheme = (mode: 'light' | 'dark') =>
  createTheme(getDesignTokens(mode));
