import React from 'react';
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles,
  Container,
  CssBaseline,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../../assets/images/rsz_logo.png';

const useHeaderStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  appBar: {},
  toolBar: {
    //border: '1px red solid',
  },
  logo: {
    '&:img': { height: '32px', width: '32px', marginTop: '-4px' },
  },
  menuButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    padding: theme.spacing(0.5),
    display: 'block',
    verticalAlign: 'center',
    whiteSpace: 'noWrap',
    // border: '1px red solid',
    [theme.breakpoints.down(1360)]: {
      marginLeft: '40px',
    },
  },
  loginButton: {
    margin: `${theme.spacing(0)} ${theme.spacing(0.5)}`,
  },
}));

const NavBar = () => {
  const headerStyles = useHeaderStyles();
  return (
    <>
      <AppBar position='static' color='primary' className={headerStyles.appBar}>
        <Toolbar disableGutters classes={{ root: headerStyles.toolBar }}>
          <IconButton
            edge='start'
            className={headerStyles.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Container maxWidth='lg'>
            <Grid container alignItems='center' justify='center'>
              <Typography className={headerStyles.title}>News</Typography>
              <Button color='inherit' className={headerStyles.loginButton}>
                Login
              </Button>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
