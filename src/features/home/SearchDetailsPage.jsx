import React, { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';
import allActions from '../../app/actions';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LanguageIcon from '@material-ui/icons/Language';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import ShareIcon from '@material-ui/icons/Share';
import FilterListSharpIcon from '@material-ui/icons/FilterListSharp';
import MoreVertIcon from '@material-ui/icons/MoreVert';
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
  Hidden,
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
  FormGroup,
  Checkbox,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  CardHeader,
  Avatar,
} from '@material-ui/core';
import theme from '../../Theme';
import { formatDistanceStrictWithOptions } from 'date-fns/fp';
import { red } from '@material-ui/core/colors';
import cardimage from '../../assets/images/fitted.jpg';
import { categories } from '../../app/config/input';

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

const useCheckboxStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));
const useDropDownSelectStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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

const useSearchResultCardStyles = makeStyles((theme) => ({
  root: {
    Height: 225,
    '& .MuiCardHeader-root': { paddingBottom: 0 },
    '& .MuiCardContent-root': { paddingTop: 0 },
  },
  media: {
    height: 0,
    // paddingTop: '56.25%', // 16:9
    paddingTop: '75%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
const useInputStyles = makeStyles((theme) => ({
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
}));

const SearchDetailsPage = () => {
  const firestore = useFirestore();
  // i++;
  // console.log('SearchPage -> i', i);

  const [result, setResult] = useState([]);
  const query = useSelector((state) => state.query.query);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.type === 'checkbox') {
      dispatch(
        allActions.queryActions.updateQuery({
          [e.target.name]: e.target.checked,
        })
      );
    } else {
      dispatch(
        allActions.queryActions.updateQuery({ [e.target.name]: e.target.value })
      );
    }

    console.log('handleChange -> e.target.name', e.target.name);
    console.log('handleChange -> e.target.value', e.target.value);
  };

  const applyFilters = () => {
    let queryReff = firestore.collectionGroup('listings');
    Object.entries(query).forEach(([key, value]) => {
      if (value !== '') queryReff = queryReff.where(key, '==', value);
    });
    queryReff
      .get()
      .then((querySnapshot) => {
        console.log('SearchPage -> querySnapshot', querySnapshot);

        const queryData = [];
        querySnapshot.forEach((doc) => {
          //  console.log(doc.data());
          queryData.push(doc.data());
          // console.log('SearchPage -> queryData.length', queryData.length);
        });
        setResult(queryData);
      })

      .catch((error) => console.log(error));
  };

  return (
    <Paper elevation={0}>
      <Container maxWidth='lg'>
        <Box mt={2}></Box>
        <Grid container>
          <Grid xs item>
            <SearchBar />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs sm={4} spacing={2}>
            <Paper elevation={0}>
              <Box mt={10}></Box>
              <Box>
                <Box m={2}>
                  <InputComponent
                    query={query}
                    Icon={LocationOnIcon}
                    label={'Select District'}
                    options={Object.keys(districtlist)}
                    nameprop={'district'}
                  />
                </Box>
                {query.district && (
                  <Box m={2}>
                    <InputComponent
                      query={query}
                      Icon={AddLocationIcon}
                      label={'Select City'}
                      options={districtlist[query.district]}
                      nameprop={'city'}
                    />
                  </Box>
                )}
                <Box m={2}>
                  <InputComponent
                    query={query}
                    Icon={LocalOfferIcon}
                    label={'Select Category'}
                    options={categories}
                    nameprop={'category'}
                  />
                </Box>

                <Box m={2}>
                  <InputComponent
                    query={query}
                    Icon={LanguageIcon}
                    label={'Select Brand'}
                    options={Object.keys(brandlist)}
                    nameprop={'brand'}
                  />
                </Box>
                {query.brand && (
                  <Box m={2}>
                    <InputComponent
                      query={query}
                      Icon={EmojiTransportationIcon}
                      label={'Select Model'}
                      options={brandlist[query.brand]}
                      nameprop={'model'}
                    />
                  </Box>
                )}
                {/* <Box m={2}>
                  <InputComponent
                    Icon={LocationOnIcon}
                    label={'Select year of manufacture'}
                    options={top100Films}
                    selection={'district'}
                  />
                </Box>
                <Box m={2}>
                  <InputComponent
                    Icon={LocationOnIcon}
                    label={'Select Condition'}
                    options={top100Films}
                    selection={'district'}
                  />
                </Box> */}
                <Divider />
                <Button
                  variant='contained'
                  color='primary'
                  fullWidth
                  onClick={applyFilters}
                >
                  Apply Filters
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item sm={8}>
            {/* {result && result.map((item) => <SearchResultCard item={item} />)} */}
            <SearchResultCard item={item} />
          </Grid>
        </Grid>
        <Box mt={2}></Box>
        <Divider />
      </Container>
    </Paper>
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

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const districtlist = {
  Ampara: [],
  Anuradhapura: [],
  Badulla: [],
  Batticaloa: [],
  Colombo: ['Kohuwala', 'Nugegoda'],
  Galle: [],
  Gampaha: [],
  Hambantota: [],
  Jaffna: [],
  Kalutara: [],
  Kandy: [],
  Kegalle: [],
  Kilinochchi: [],
  Kurunegala: [],
  Mannar: [],
  Matale: [],
  Matara: [],
  Monaragala: [],
  Mullaitivu: [],
  'Nuwara Eliya': [],
  Polonnaruwa: [],
  Puttalam: [],
  Ratnapura: [],
  Trincomalee: [],
  Vavuniya: [],
};
const brandlist = {
  Honda: ['Fit', 'Insight', 'Civic', 'Grace'],
  Toyota: ['Axio', 'Premio', 'Allion', 'Vitz'],
};
const InputComponent = ({ Icon, label, options, nameprop, query }) => {
  const dispatch = useDispatch();
  //const classes = useInputStyles();

  const [value, setValue] = React.useState(query[nameprop]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <Paper elevation={0} component='form'>
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
      >
        <Box display='flex'>
          <Icon fontSize='default' />
        </Box>
        <Box display='flex' m={1}></Box>
        <Box display='flex'>
          <Typography variant='su'>
            <Autocomplete
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
                dispatch(
                  allActions.queryActions.updateQuery({
                    [nameprop]: newInputValue,
                  })
                );
              }}
              size='small'
              fullWidth
              id='combo-box-demo'
              options={options}
              // getOptionLabel={(option) => option[selection]}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label={label} variant='outlined' />
              )}
            />
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

const SearchResultCard = ({ item }) => {
  const classes = useSearchResultCardStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        // avatar={
        //   <Avatar aria-label='recipe' className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={item.title}
        subheader={item.date}
      />
      <Grid container>
        <Grid item xs={2}>
          <Box pt={0.5}>
            <CardMedia
              className={classes.media}
              // image={cardimage}
              title='Paella dish'
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <CardContent>
            <Grid container direction='column'>
              <Grid item>
                <Typography
                  variant='subtitle1'
                  color='textSecondary'
                  component='p'
                >
                  {item.mileage}
                  {' km'}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant='subtitle1'
                  color='textSecondary'
                  component='p'
                >
                  {item.district}
                  {' ,'}
                  {item.category}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='subtitle1' color='secondary' component='p'>
                  {'Rs '}
                  {item.price}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
      {/*  */}

      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>{item.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const item = {
  title: 'Honda Fit GP5 F Grade 2014',
  date: '05 Jun 2:16 pm',
  mileage: 2500,
  price: 4800000,
  negotiable: true,
  district: 'Colombo',
  city: 'Kohuwala',
  category: 'cars',
  name: 'Gayan Ranasinghe',
  contactno: 773337484,
  brand: 'Honda',
  model: 'Fit',
  edition: 'GP5',
  modelyear: 2014,
  condition: 'Registered',
  transmission: 'Automatic',
  bodytype: 'Saloon',
  fueltype: 'Petrol',
  enginecapacity: 1500,
  description:
    'CAS - 8***, Peacock Blue Colour, Alloy Wheels, Push Start, Intelligent Key, Dual Air Bags, Multifunction Steering, ABS, DVD Player, Back Camera, Winkler Mirrors, Key Less Entry, Re Trad Mirrors, Power Windows, Power Mirrors, 1st Owner, Excellent Condition, Service Records Available',
};
export default SearchDetailsPage;
