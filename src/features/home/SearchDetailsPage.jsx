import React from 'react';
import clsx from 'clsx';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { districts } from '../../app/config/input';
import PropTypes from 'prop-types';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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
  return (
    <>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={6} sm={2} md={2} lg={2}>
            <LocationSelectModal />
          </Grid>
          <Grid item xs={6} sm={2} md={2} lg={2}>
            <LocationSelectModal />
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
  const matchXS = useMediaQuery(theme.breakpoints.down('xs'));
  const classes = useStyles();
  const tabStyles = useTabStyles();
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
        classes={{ paper: classes.dialogPaper }}
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
              className={classes.closeButton}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <div className={classes.root}>
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
                            className={key === value ? classes.active : ''}
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
                            className={classes.secondaryList}
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

export default SearchDetailsPage;
