import React from 'react';
import SignIn from '../auth/login/SignIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {
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
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { categories } from '../../app/config/input';

const useStyles = makeStyles({
  root: {
    maxWidth: 288,
  },
  media: {
    height: 60,
  },
});
const useSearchStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const HomePage = () => {
  const classes = useSearchStyles();
  return (
    <>
      <Container maxWidth='lg'>
        {' '}
        <Box mt={4} mb={2}>
          <Typography variant='h6'>
            Welcome to automobiles.lk - the largest location aware marketplace
            in Sri Lanka!
          </Typography>
          <Typography variant='caption'>
            Buy and sell everything from used cars to accessories and more in
            Sri Lanka!
          </Typography>
        </Box>
        <Box mt={1} mb={2}>
          <Typography variant='body1'>Post Your ads for Free</Typography>

          <Typography>Browse for used and new vehicles</Typography>
        </Box>
        <Box display='flex' flexDirection='row'>
          <Box color='primary' width={120}>
            <Button variant='contained' color='primary' fullWidth>
              Post Ad
            </Button>
          </Box>
          <Box ml={2}>
            <Button variant='outlined' color='primary'>
              Search Ads
            </Button>
          </Box>
        </Box>
        <Box mb={4}></Box>
        <Divider />
        {/* Section for Filtering  */}
        <Grid container direction='row'>
          <LocationModal />

          {/* <Divider orientation='vertical' flexItem /> */}
          {/* <Box mt={2} display='flex' flexDirection='row'>
            <Box>
              <Typography variant='overline'>Select by Rental </Typography>
            </Box>

            <Box>
              <form className={classes.root} noValidate autoComplete='off'>
                <TextField
                  id='outlined-basic'
                  label='District'
                  variant='outlined'
                  size='small'
                />
              </form>
            </Box>
          </Box> */}
        </Grid>
        <Box mb={4}></Box>
        <Divider />
        <Box mt={2}>
          <Typography>Browse our top categories</Typography>
          <Box
            mt={2}
            display='flex'
            flexDirection='row'
            alignItems='center'
            //  justifyContent='center'
          >
            <Box display='flex'>
              <LocationOnIcon fontSize='small' />
            </Box>
            <Box display='flex'>
              <Typography variant='overline'>Select by Location </Typography>
            </Box>
          </Box>
          <Box mt={4} mb={4}></Box>

          <Grid
            container
            direction='row'
            alignItems='center'
            justify='center'
            alignContent='center'
          >
            {categories.map((category) => (
              <CategoryCard category={category} />
            ))}
          </Grid>
        </Box>
        <Box mt={4} mb={4}></Box>
        <Divider />
        <Box mt={4} mb={4}></Box>
      </Container>

      {/* <SignIn /> */}
    </>
  );
};

const CategoryCard = ({ category }) => {
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={4} md={3} lg={3}>
      <Box m={0.5}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image='/static/images/cards/contemplative-reptile.jpg'
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                <Typography variant='subtitle2'>{category}</Typography>
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              Share
            </Button>
            {/* <Button size='small' color='primary'>
              Learn More
            </Button> */}
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
};
const LocationModal = () => {
  //const locationModalStyles = useLocationModalStyles();
  const [open, setOpen] = React.useState(false);

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
            <Typography variant='overline'>Select by Location </Typography>
          </Box>
        </Box>
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Email Address'
            type='email'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleClose} color='primary'>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default HomePage;
