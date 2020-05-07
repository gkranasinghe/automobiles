import React, { Component } from 'react';
import { Grid, Container, Typography, CssBaseline } from '@material-ui/core';

class EventDashboard extends Component {
  render() {
    return (
      <>
        <Container maxWidth='lg'>
          <Grid container>
            <Grid xs={8}>
              {' '}
              <Typography>Left Column</Typography>
            </Grid>
            <Grid xs={4}>
              <Typography>Right Column</Typography>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default EventDashboard;
