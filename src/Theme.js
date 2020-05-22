import { createMuiTheme } from '@material-ui/core/styles';

// const primary = '#1a73e8';
// const secondary = '#202124';
const primary = '#003152';
const secondary = '#d4af37';
const onPrimary = '#ffffff';
const onSecondary = '#ffffff';

const theme = createMuiTheme({
  palette: {
    common: {
      // blue: `${primary}`,
      // orange: `${secondary}`,
    },
    primary: {
      main: `${primary}`,
      contrastText: `${onPrimary}`,
    },
    secondary: {
      main: `${secondary}`,
      contrastText: `${onSecondary}`,
    },
  },
  typography: {
    fontFamily: [
      'Noto Sans JP',
      'sans-serif',
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      fontWeight: 300,
      // fontSize: '0.8rem',
    },
    h3: {
      // fontWeight: 400,
    },
    subtitle2: {
      textTransform: 'capitalize',
      // fontWeight: 400,
    },
    content: {},
  },
  status: {
    //danger: 'orange',
  },
  overrides: {
    MuiButton: {
      root: {},
      containedPrimary: {
        //    color: '#ffffff',
      },
      containedSecondary: {
        //      color: '#ffffff',
      },
    },
    // Style sheet name ⚛️
    MuiTypography: {
      // Name of the rule
      // root: {
      //   // Some CSS
      // },
    },
    MuiContainer: {
      // Name of the rule

      root: {
        // Some CSS
        // border: '1px red solid',
      },
    },
  },
});

export default theme;
