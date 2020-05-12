import {
  CREATE_EVENT_STARTED,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE,
} from './eventConstants';

const createEvent = (event) => {
  return (dispatch) => {
    dispatch(createEventStarted());
  };
};

const createEventStarted = () => ({
  type: CREATE_EVENT_STARTED,
});

const createEventSuccess = (event) => ({
  type: CREATE_EVENT_SUCCESS,
  payload: {
    ...event,
  },
});

const createEventFailure = (error) => ({
  type: CREATE_EVENT_FAILURE,
  payload: {
    error,
  },
});

export default { createEvent };
