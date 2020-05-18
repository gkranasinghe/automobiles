import {
  UPDATE_EVENT_STARTED,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_FAILURE,
} from './userConstants';
import { useDispatch } from 'react-redux';
import createEvent from '../event/eventReducer';

// const updateEvent = (refID) => {
//   const dispatch = useDispatch();
//   return dispatch(updateEventStarted());
// };
// const updateEventStarted = () => ({
//   type: UPDATE_EVENT_STARTED,
// });
