import React from 'react';
import {
  Grid,
  Container,
  Typography,
  Box,
  useMediaQuery,
} from '@material-ui/core';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import { useTheme } from '@material-ui/core/styles';

const events = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://i.pravatar.cc/300?img=1',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://i.pravatar.cc/300?img=2',
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://i.pravatar.cc/300?img=3',
      },
    ],
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
      },
    ],
  },
];

const EventDashboard = () => {
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
              <EventList events={events} />
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
