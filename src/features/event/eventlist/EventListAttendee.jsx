import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
const usePeopleFaceStyles = makeStyles((theme) => ({
  person: {
    display: 'inline-block',
    border: '2px solid white',
    '&:not(:first-of-type)': {
      marginLeft: -theme.spacing(1),
    },
    borderRadius: '50%',
    height: '2rem',
    width: '2rem',
  },
}));

const EventListAttendee = ({ attendee }) => {
  const peopleFaceStyles = usePeopleFaceStyles();
  return (
    <>
      <img className={peopleFaceStyles.person} src={attendee.photoURL} alt='' />
    </>
  );
};

export default EventListAttendee;
