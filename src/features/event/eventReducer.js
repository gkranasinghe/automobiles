import {
  CREATE_EVENT,
  DELETE_EVENT,
  UPDATE_EVENT,
  FETCH_EVENTS,
} from './eventConstants';

const initialState = {};

const createEvent = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_EVENT:
      console.log('createEvent -> payload', payload);
      return Object.assign({}, state, payload);
    case UPDATE_EVENT:
      return [
        ...state.filter((event) => event.id !== payload.id),
        ...payload,
        // Object.assign({}, payload),
      ];
    case DELETE_EVENT:
      return [...state.filter((event) => event.id !== payload.id)];
    case FETCH_EVENTS:
      return payload;

    default:
      return state;
  }
};

export default createEvent;
