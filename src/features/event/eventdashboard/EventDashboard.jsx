import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';
import {
  Grid,
  Container,
  Typography,
  Box,
  useMediaQuery,
} from '@material-ui/core';
import EventList from '../eventlist/EventList';
import EnquiryPage from '../eventform/EventForm';
import { useTheme } from '@material-ui/core/styles';

const EventDashboard = () => {
  const firestore = useFirestore();
  const { uid } = useSelector((state) => state.firebase.auth);
  // const { displayName, uid } = useSelector((state) => state.firebase.auth);
  // console.log('EventDashboard -> uid', uid);

  // const events = useSelector((state) => state.events);
  // console.log('EventDashboard -> events ', events);

  const dispatch = useDispatch();
  console.log('EventDashboard -> dispatch', dispatch);
  const handleSubmit = (values) => {
    console.log('handleSubmit -> values', values);
    firestore
      .collection('users')
      .doc(uid)
      .collection('listings')
      .add({ ...values, isSold: false })
      .then((docRef) => {
        docRef.update({
          listingID: docRef.id,
        });
      });
  };

  const theme = useTheme();
  const matchXS = useMediaQuery(theme.breakpoints.down(600));
  console.log('EventDashboard -> matchXS', matchXS);

  return (
    <>
      <Container maxWidth='lg'>
        <Grid
          container
          direction={matchXS ? 'column-reverse' : 'row'}
          wrap='nowrap'
        >
          <Grid item xs>
            <Box mb={3}>
              <Typography>Left Column</Typography>
              <EventList />
            </Box>
          </Grid>
          <Grid item xs={matchXS ? '12' : '4'}>
            <Typography>Right Column</Typography>
            <EnquiryPage
              dispatch={dispatch}
              handleSubmit={handleSubmit}
              tank={'tank'}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EventDashboard;
