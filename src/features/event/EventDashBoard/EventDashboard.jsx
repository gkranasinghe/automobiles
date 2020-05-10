import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Grid,
  Container,
  Typography,
  Box,
  useMediaQuery,
} from '@material-ui/core';
import EventList from '../EventList/EventList';
import EnquiryPage from '../EventForm/EventForm';
import { useTheme } from '@material-ui/core/styles';

const EventDashboard = () => {
  const events = useSelector((state) => state.events);
  console.log('EventDashboard -> events ', events);
  const dispatch = useDispatch();
  console.log('EventDashboard -> dispatch', dispatch);

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
              {Array.isArray(events) && events.length ? (
                <EventList events={events} />
              ) : null}
            </Box>
          </Grid>
          <Grid item xs={matchXS ? '12' : '4'}>
            <Typography>Right Column</Typography>
            <EnquiryPage dispatch={dispatch} tank={'tank'} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EventDashboard;
