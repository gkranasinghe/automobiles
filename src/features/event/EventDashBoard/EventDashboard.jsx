import React, { Component } from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';

class EventDashboard extends Component {
  render() {
    return (
      <>
        <Container maxWidth='lg'>
          <Grid container>
            <Grid xs={8}>
              {' '}
              <Typography>Left Column</Typography>
              <EventList />
            </Grid>
            <Grid xs={4}>
              <Typography>Right Column</Typography>
              <EventForm />
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default EventDashboard;
