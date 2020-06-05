import React from 'react';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { NavLink } from 'react-router-dom';
//import { useFirestore } from 'react-redux-firebase';
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
  Box,
  Avatar,
  Menu,
  MenuItem,
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
  const { uid } = useSelector((state) => state.firebase.auth);
  const { avatarUrl } = useSelector((state) => state.firebase.profile);
  //console.log('NavBar ->  avatarUrl', avatarUrl);

  const firebase = useFirebase();
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
                <Grid
                  container
                  wrap='nowrap'
                  alignItems='center'
                  justify='center'
                >
                  {uid ? (
                    <>
                      <Button
                        size='small'
                        variant='contained'
                        color='secondary'
                        component={NavLink}
                        className={headerStyles.loginButton}
                        to='/postad'
                      >
                        Post Ad
                      </Button>
                      <ImageAvatars
                        avatarUrl={avatarUrl}
                        aria-controls='simple-menu'
                        aria-haspopup='true'
                      />
                    </>
                  ) : (
                    <>
                      <Button
                        variant='outlined'
                        color='inherit'
                        className={headerStyles.loginButton}
                        onClick={() => {
                          firebase.login({
                            provider: 'google',
                            type: 'popup',
                          });
                        }}
                      >
                        Log in
                      </Button>
                      <Button
                        variant='outlined'
                        color='secondary'
                        className={headerStyles.loginButton}
                        onClick={() => {
                          firebase.login({
                            provider: 'google',
                            type: 'popup',
                          });
                        }}
                      >
                        Sign up
                      </Button>
                    </>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

    '& > *': {
      // margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

const ImageAvatars = ({ avatarUrl }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const firebase = useFirebase();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        className={classes.root}
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <Avatar
          className={classes.small}
          alt='profile picture'
          src={avatarUrl}
        />
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          component={NavLink}
          to='/myads'
          onClick={() => {
            setAnchorEl(null);
          }}
        >
          My ads
        </MenuItem>
        <MenuItem
          onClick={() => {
            firebase.logout();
            setAnchorEl(null);
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default NavBar;
