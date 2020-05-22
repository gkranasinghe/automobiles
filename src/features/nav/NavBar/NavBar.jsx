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
  Hidden,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../../assets/images/bmw-m-series.svg';

const useHeaderStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  appBar: {
    // background:

    '& .MuiButton-root': {
      margin: theme.spacing(0, 2),
      fontSize: '1rem',
      textTransform: 'none',
    },
  },
  toolBar: {
    //border: '1px red solid',
  },
  logo: {
    '&:img': { height: '2rem', width: '2rem', marginTop: '-0.25rem' },
    [theme.breakpoints.down(1360)]: {
      marginLeft: '40px',
    },
    flexGrow: 1,
  },
  menuButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    marginLeft: theme.spacing(2),
  },
  title: {
    padding: theme.spacing(0.5),
    display: 'block',
    verticalAlign: 'center',
    whiteSpace: 'noWrap',
  },
  loginButton: {
    margin: theme.spacing(0, 2),
    whiteSpace: 'noWrap',
    paddingBottom: 0.78571429,
    paddingTop: 0.78571429,
    fontSize: '1rem',
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
                  {/* <Button>
                    <img src={logo} alt='logo' />
                  </Button> */}
                  <Hidden xsDown>
                    <Button
                      color='inherit'
                      className={headerStyles.loginButton}
                    >
                      About us
                    </Button>
                    <Button
                      color='inherit'
                      className={headerStyles.loginButton}
                    >
                      Contact us
                    </Button>
                  </Hidden>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container wrap='nowrap'>
                  <Button
                    variant='outlined'
                    color='inherit'
                    className={headerStyles.loginButton}
                  >
                    Log in
                  </Button>
                  <Button
                    variant='outlined'
                    color='secondary'
                    className={headerStyles.loginButton}
                  >
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
