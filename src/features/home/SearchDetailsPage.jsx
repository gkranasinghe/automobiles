import React from 'react';
import clsx from 'clsx';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { districts } from '../../app/config/input';
import PropTypes from 'prop-types';

import {
  Tab,
  Tabs,
  Box,
  Typography,
  Button,
  Container,
  Divider,
  Grid,
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
} from '@material-ui/core';
import theme from '../../Theme';
import { formatDistanceStrictWithOptions } from 'date-fns/fp';

const useTabStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
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
  return (
    <>
      <Container maxWidth='lg'>
        {' '}
        <Grid container>
          <Grid item xs={6} sm={2} md={2} lg={2}>
            <LocationSelectModal />
          </Grid>
          <Grid item xs={6} sm={2} md={2} lg={2}>
            {/* <VehicleSelectModal /> */}
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </Container>
    </>
  );
};

const LocationSelectModal = () => {
  //const locationModalStyles = useLocationModalStyles();
  const [open, setOpen] = React.useState(false);
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  const tabStyles = useTabStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
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
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          Select City or Division
        </DialogTitle>
        <DialogContent>
          <div className={classes.root}>
            <Grid container>
              <Grid item>
                <Tabs
                  orientation='vertical'
                  variant='scrollable'
                  value={value}
                  onChange={handleChange}
                  aria-label='Vertical tabs example'
                  className={tabStyles.tabs}
                >
                  {Object.entries(districts).map(([key], index) => (
                    <Tab label={key} {...a11yProps(index)} />
                  ))}
                </Tabs>
              </Grid>
              <Grid item>
                <TabPanel value={value} index={0}>
                  Item One
                </TabPanel>
                {Object.entries(districts).map(([key, data], index) => {
                  return <TabPanel value={value} index={index}>{data}</TabPanel>;
                })}
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
    </div>
  );
};

// const VehicleSelectModal = () => {
//   //const locationModalStyles = useLocationModalStyles();
//   const [open, setOpen] = React.useState(false);
//   // const matchSM = theme.breakpoints.down('sm');
//   const matchSM = useMediaQuery(theme.breakpoints.down('sm'));
//   console.log('LocationModal -> matchSM', matchSM);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant='text' color='primary' onClick={handleClickOpen}>
//         <Box
//           display='flex'
//           flexDirection='row'
//           alignItems='center'
//           justifyContent='center'
//         >
//           <Box display='flex'>
//             <DriveEtaIcon fontSize='small' />
//           </Box>
//           <Box display='flex'>
//             <Typography variant='overline'>
//               {matchSM ? 'Vehicle' : 'Select Vehicle'}
//             </Typography>
//           </Box>
//         </Box>
//       </Button>

//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby='form-dialog-title'
//       >
//         <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             To subscribe to this website, please enter your email address here.
//             We will send updates occasionally.
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin='dense'
//             id='name'
//             label='Email Address'
//             type='email'
//             fullWidth
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color='primary'>
//             Cancel
//           </Button>
//           <Button onClick={handleClose} color='primary'>
//             Subscribe
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default SearchDetailsPage;
