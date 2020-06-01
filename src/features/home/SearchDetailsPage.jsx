import React, { useState } from 'react';
import allActions from '../../app/actions';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import MenuIcon from '@material-ui/icons/Menu';
import DirectionsIcon from '@material-ui/icons/Directions';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { districts } from '../../app/config/input';
import PropTypes from 'prop-types';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {
  Paper,
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  Box,
  Typography,
  Button,
  Container,
  Divider,
  Grid,
  InputBase,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  makeStyles,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  FormControlLabel,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Chip,
  ExpansionPanelActions,
  useMediaQuery,
  fade,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import theme from '../../Theme';
import { formatDistanceStrictWithOptions } from 'date-fns/fp';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '50vw',
    [theme.breakpoints.up(735)]: {
      width: '10ch',
      '&:focus': {
        width: '14ch',
      },
    },
  },
}));
const useSideBarStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
const useModalStyles = makeStyles((theme) => ({
  root: {
    //   width: '100%',
    [theme.breakpoints.up('sm')]: {
      minWidth: 500,
    },
    [theme.breakpoints.up('md')]: {
      minWidth: 800,
    },
    [theme.breakpoints.up('lg')]: {
      minWidth: 900,
    },
  },

  dialogPaper: {
    minHeight: '75vh',
    //maxHeight: '80vh',
    //minWidth: '80vw',
  },
  secondaryList: {
    '& .MuiButton-root:hover': {
      boxShadow: '1px 1px 1px 1px #003152',
    },
  },

  active: {
    //border: '0.6px #d3d3d3 solid',
    boxShadow: '1px 1px 1px 1px #003152',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const SearchDetailsPage = () => {
  //const query = useSelector((state) => state.query);
  const sideBarStyles = useSideBarStyles();
  const [opentypeofAd, setOpentypeofAd] = useState(true);
  //const [typeofAd, settypeofAd] = useState('Wanted');
  const [transmission, setTransmission] = useState('');
  const [bodyType, setbodyType] = useState('');
  const [condition, setCondition] = useState('');
  const [query, setQuery] = useState({});

  const handleChange = (e) => {
    //settypeofAd(e.target.value);
    setQuery({ ...query, [e.target.name]: e.target.value });
    console.log('handleChange -> e.target.name', e.target.name);
  };
  const handleClicktypeofAd = () => {
    setOpentypeofAd(!opentypeofAd);
  };

  return (
    <Paper elevation={0}>
      <Container maxWidth='lg'>
        <Box mt={2}></Box>
        <Grid container>
          <Grid item xs={6} sm={2} md={2}>
            <Paper elevation={0}>
              <LocationSelectModal />
            </Paper>
          </Grid>
          <Grid item> </Grid>
          <Grid item xs={6} sm={2} md={2}>
            <Paper elevation={0}>
              <LocationSelectModal />
            </Paper>
          </Grid>
          <Grid item></Grid>
        </Grid>
        <Grid container>
          <Grid item sm={4}>
            <List
              component='nav'
              aria-labelledby='nested-list-subheader'
              subheader={
                <ListSubheader component='div' id='nested-list-subheader'>
                  Nested List Items
                </ListSubheader>
              }
              className={sideBarStyles.root}
            >
              <Divider />
              <ListItem button onClick={handleClicktypeofAd}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary='Type of Ad' />
                {opentypeofAd ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              <Collapse in={opentypeofAd} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  <RadioSelect />
                </List>
              </Collapse>
              <Divider />
            </List>
          </Grid>
          <Grid item sm={8}></Grid>
        </Grid>
        <Box mt={2}></Box>
        <Divider />
      </Container>
    </Paper>
  );
};

const LocationSelectModal = () => {
  //const locationModalStyles = useLocationModalStyles();
  const [open, setOpen] = React.useState(false);
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchXS = useMediaQuery(theme.breakpoints.down('xs'));
  const modalStyles = useModalStyles();

  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClick = (newValue) => {
    setValue(newValue);
    console.log('handleClick -> newValue', newValue);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box position='relative'>
      <Button variant='text' color='primary' onClick={handleClickOpen}>
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          justifyContent='center'
        >
          <Box display='flex'>
            <LocationOnIcon fontSize='small' />
          </Box>
          <Box display='flex'>
            <Typography variant='overline'>
              {matchSM ? 'Location' : 'Select Location'}
            </Typography>
          </Box>
        </Box>
      </Button>

      <Dialog
        sideBarStyles={{ paper: modalStyles.dialogPaper }}
        scroll='paper'
        fullScreen={matchXS}
        //  fullScreen={true}
        maxWidth='lg'
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          <Grid container alignItems='center' justify='space-between'>
            <Typography variant='h6'>Select City or Division</Typography>

            <IconButton
              aria-label='close'
              className={modalStyles.closeButton}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <div className={modalStyles.root}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={6} lg={6}>
                <Grid container direction='column'>
                  {Object.keys(districts).map((key, index) => {
                    return (
                      <>
                        <Box display='flex' pt={0.1} pb={0.1}>
                          <Button
                            // disableRipple
                            fullWidth
                            key={index}
                            onClick={() => handleClick(key)}
                            size='small'
                            color={key === value ? 'primary' : ''}
                            //   variant={key === value ? 'outlined' : ''}
                            className={key === value ? modalStyles.active : ''}
                          >
                            <Grid
                              container
                              direction='row'
                              alignItems='center'
                              justify='space-between'
                            >
                              <Typography
                                variant={matchXS ? 'subtitle2' : 'subtitle2'}
                              >
                                {key}
                              </Typography>
                              <ArrowForwardIosIcon fontSize='small' />
                            </Grid>
                          </Button>
                        </Box>
                        <Divider variant='fullWidth' />
                      </>
                    );
                  })}
                </Grid>
              </Grid>

              <Grid item xs={6} md={6} lg={6}>
                <Grid container direction='column'>
                  {districts[value] &&
                    districts[value].map((data, index) => {
                      return (
                        <>
                          <Box
                            display='flex'
                            pt={0.1}
                            pb={0.1}
                            className={modalStyles.secondaryList}
                          >
                            <Button fullWidth size='small' key={index}>
                              <Grid
                                container
                                direction='row'
                                alignItems='center'
                                justify='space-between'
                              >
                                <Typography
                                  variant={matchXS ? 'subtitle2' : 'subtitle2'}
                                >
                                  {' '}
                                  {data}
                                </Typography>
                                {/* <ArrowForwardIosIcon fontSize='small' /> */}
                              </Grid>
                            </Button>
                          </Box>
                          <Divider />
                        </>
                      );
                    })}
                </Grid>
              </Grid>
            </Grid>
          </div>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleClose} color='primary'>
            Subscribe
          </Button> */}
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const SearchBar = () => {
  const classes = useStyles();
  return (
    <>
      {' '}
      <Paper component='form' className={classes.root} elevation={0}>
        {/* <IconButton className={classes.iconButton} aria-label='menu'>
    <MenuIcon />
  </IconButton> */}

        <InputBase
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          placeholder='Search Google Maps'
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton
          type='submit'
          className={classes.iconButton}
          aria-label='search'
        >
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} orientation='vertical' />
        <IconButton
          color='primary'
          className={classes.iconButton}
          aria-label='directions'
        >
          <DirectionsIcon />
        </IconButton>
      </Paper>
    </>
  );
};

const RadioSelect = ({ radioselectlist }) => {
  const sideBarStyles = useSideBarStyles();
  const typeofAd = useSelector((state) => state.query.typeofAd);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    //settypeofAd(e.target.value);
    // setQuery({ ...query, [e.target.name]: e.target.value });
    dispatch(
      allActions.queryActions.updateQuery({ [e.target.name]: e.target.value })
    );
    console.log('handleChange -> e.target.name', e.target.name);
  };
  return (
    <>
      <FormControl component='fieldset' className={sideBarStyles.nested}>
        {/* <FormLabel component='legend'>Type of Ad</FormLabel> */}
        <RadioGroup
          aria-label='gender'
          name='typeofAd'
          value={typeofAd}
          onChange={handleChange}
        >
          <FormControlLabel
            value='For Sale'
            control={<Radio />}
            label='For Sale'
          />
          <FormControlLabel value='Wanted' control={<Radio />} label='Wanted' />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default SearchDetailsPage;
