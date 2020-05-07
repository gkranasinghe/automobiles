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
  Hidden,
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
    [theme.breakpoints.down(1360)]: {
      marginLeft: '40px',
    },
    flexGrow: 1,
    border: '1px red solid',
  },
  menuButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    marginLeft: theme.spacing(2),
  },
  title: {
    //
    padding: theme.spacing(0.5),
    display: 'block',
    verticalAlign: 'center',
    whiteSpace: 'noWrap',
    // border: '1px red solid',
  },
  loginButton: {
    margin: `${theme.spacing(0)} ${theme.spacing(0.5)}`,
    whiteSpace: 'noWrap',
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
            <Grid
              container
              alignItems='center'
              justify='space-between'
              wrap='nowrap'
            >
              <Grid item className={headerStyles.logo}>
                <Grid container wrap='nowrap'>
                  <Button>
                    <img src={logo} alt='logo' /> <Typography>News</Typography>
                  </Button>
                  <Hidden xsDown>
                    <Button
                      color='inherit'
                      className={headerStyles.loginButton}
                    >
                      Login
                    </Button>
                    <Button
                      color='inherit'
                      className={headerStyles.loginButton}
                    >
                      Login
                    </Button>
                  </Hidden>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container wrap='nowrap'>
                  <Button color='inherit' className={headerStyles.loginButton}>
                    Login
                  </Button>
                  <Button color='inherit' className={headerStyles.loginButton}>
                    Sign up
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
