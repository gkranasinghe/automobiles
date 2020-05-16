import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  CardHeader,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Box,
  Grid,
  Hidden,
  Divider,
  Link,
} from '@material-ui/core/';

import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EventListAttendee from './EventListAttendee';

const useCardStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    // alignSelf: 'flex-start',
  },
  eventInfo: {
    '& .MuiTypography-root': {
      fontSize: '0.9rem',
      whiteSpace: 'nowrap',
    },
    [theme.breakpoints.down(500)]: {
      '& .MuiTypography-root': {
        fontSize: '0.75rem',
      },
      '& .MuiSvgIcon-root': {
        fontSize: '0.75rem',
        margin: '-0.25rem 0.25rem 0rem 0rem',
      },
    },
    '& .MuiSvgIcon-root': {
      fontSize: '0.7rem',
      // margin: '-0.25rem 0.25rem 0rem 0rem',
    },
  },
  locationIcon: {
    marginRight: 4,
    fontSize: 18,
  },
}));

const usePeopleCardFooterStyles = makeStyles((theme) => ({
  divider: {
    marginBottom: theme.spacing(3),
  },
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

const EventListItem = (props) => {
  const cardStyles = useCardStyles();
  //const { listing } = props;
  console.log('EventListItem -> event', props.listing);

  // const date = new Date(event.date).toLocaleDateString('en-US', {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  //   hour: 'numeric',
  //   minute: 'numeric',
  //   title: '',
  //   attendees: [],
  // });

  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  // const eventInfo = (
  //   <Box color={'grey.500'} display={'flex'} alignItems={'center'} ml={-0.55}>
  //     <LocationOnIcon className={cardStyles.locationIcon} />
  //     <span>{event.venue}</span>
  //     {/* <Hidden xsDown> */}
  //     <Divider
  //       style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}
  //       orientation='vertical'
  //       flexItem
  //     />
  //     {/* </Hidden> */}
  //     <WatchLaterIcon className={cardStyles.locationIcon} />
  //     <span>{date}</span>
  //     <Divider
  //       style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}
  //       orientation='vertical'
  //       flexItem
  //     />
  //     <Box color={'grey.500'} display={'flex'} alignSelf='flex-end'>
  //       <Typography variant='caption'>
  //         <Link
  //           color='textSecondary'
  //           href='#'
  //           onClick={(event) => event.preventDefault()}
  //         >
  //           Hosted By {event.hostedBy}
  //         </Link>
  //       </Typography>
  //     </Box>
  //   </Box>
  // );
  return (
    <>
      <h1>{props.listing.listingID}</h1>

      {/* <Card className={cardStyles.root}>
        <CardHeader
          avatar={
            <Avatar
              aria-label='recipe'
              className={cardStyles.avatar}
              src={event.hostPhotoURL}
            >
              R
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Box color={'grey.500'} display={'flex'}>
              <Typography variant='h6'>{event.title}</Typography>
            </Box>
          }
          subheader={eventInfo}
        />
        <Divider orientation='horizontal' light />
        <CardContent></CardContent>

        <CardMedia
          className={cardStyles.media}
          image='/static/images/cards/paella.jpg'
          title='Paella dish'
        />
        <Box px={3} pb={3}>
          <PeopleCardFooter attendees={event.attendees} />
          <Typography
            component={'span'}
            variant={'body2'}
            color={'textSecondary'}
          >
            +420
          </Typography>
        </Box>
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {event.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(cardStyles.expand, {
              [cardStyles.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that don’t
              open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card> */}
    </>
  );
};

// EventListItem.defaultProps = {
//   venue: '',
//   date: undefined,
//   hostedBy: '',
//   hostPhotoURL: '',
// };
const PeopleCardFooter = ({ attendees, noDivider }) => {
  const peopleCardFooterStyles = usePeopleCardFooterStyles();

  return (
    <>
      {!noDivider && (
        <Divider className={peopleCardFooterStyles.divider} light />
      )}

      {Array.isArray(attendees) && attendees.length
        ? attendees.map((attendee) => {
            return <EventListAttendee key={attendee.id} attendee={attendee} />;
          })
        : null}
    </>
  );
};

// PeopleCardFooter.propTypes = {
//   faces: PropTypes.arrayOf(PropTypes.string),
//   noDivider: PropTypes.bool,
// };
PeopleCardFooter.defaultProps = {
  faces: [],
  noDivider: false,
};
export default EventListItem;
