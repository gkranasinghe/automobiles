import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#2CA6BD';
const arcOrange = '#ffba60';

const theme = createMuiTheme({
  palette: {
    // common: {
    //   blue: `${arcBlue}`,
    //   orange: `${arcOrange}`,
    // },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    fontFamily: [
      'Jost',
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      fontWeight: 400,
      fontSize: '0.8rem',
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
        color: '#ffffff',
      },
      containedSecondary: {
        color: '#ffffff',
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
