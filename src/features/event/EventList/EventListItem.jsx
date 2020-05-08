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
} from '@material-ui/core/';

import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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
const EventListItem = () => {
  const cardStyles = useCardStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const eventInfo = (
    <div className={cardStyles.eventInfo}>
      <Grid container direction='column'>
        <Grid item>
          {' '}
          <Typography variant='body2' color='textSecondary' gutterBottom>
            Hosted by{' '}
            <a href='#' style={{ color: '#4183c4', textDecoration: 'none' }}>
              {' '}
              <span>Gayan K</span>
            </a>
          </Typography>
        </Grid>
        <Grid item>
          <Grid container direction='row'>
            <Grid item>
              <Grid container alignItems='center' wrap='nowrap'>
                <WatchLaterIcon />
                <Typography
                  style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}
                >
                  {' '}
                  Today, 1:00 PM
                </Typography>
              </Grid>
            </Grid>
            <Hidden xsDown>
              <Divider
                style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}
                orientation='vertical'
                flexItem
              />
            </Hidden>
            <Grid item>
              <Grid container alignItems='center' wrap='nowrap'>
                {' '}
                <LocationOnIcon />
                <Typography
                  style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}
                >
                  London
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
  return (
    <>
      <Card className={cardStyles.root}>
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={cardStyles.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title='Shrimp and Chorizo Paella'
          subheader={eventInfo}
        />

        <CardMedia
          className={cardStyles.media}
          image='/static/images/cards/paella.jpg'
          title='Paella dish'
        />
        <Box px={3} pb={3}>
          <PeopleCardFooter
            faces={[
              'https://i.pravatar.cc/300?img=1',
              'https://i.pravatar.cc/300?img=2',
              'https://i.pravatar.cc/300?img=3',
              'https://i.pravatar.cc/300?img=4',
            ]}
          />
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
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
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
      </Card>
    </>
  );
};

const PeopleCardFooter = ({ faces, noDivider }) => {
  const peopleCardFooterStyles = usePeopleCardFooterStyles();
  return (
    <>
      {!noDivider && (
        <Divider className={peopleCardFooterStyles.divider} light />
      )}
      {/* <FaceGroup faces={faces} /> */}
      {faces.map((face) => {
        return (
          <>
            <img className={peopleCardFooterStyles.person} src={face} alt='' />
          </>
        );
      })}
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
