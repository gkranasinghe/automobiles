import React from 'react';
import { Grid, Container, Typography, Box } from '@material-ui/core';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import { useTheme } from '@material-ui/core/styles';

const EventDashboard = () => {
  const theme = useTheme();
  const matchXS = theme.breakpoints.down(600);
  return (
    <>
      <Container maxWidth='lg'>
        <Grid container direction={matchXS ? 'column' : 'row'} wrap='nowrap'>
          <Grid item xs>
            <Box mb={3}>
              <Typography>Left Column</Typography>
              <EventList />
            </Box>
          </Grid>
          <Grid item xs={matchXS ? '12' : '4'}>
            <Typography>Right Column</Typography>
            <EventForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EventDashboard;
