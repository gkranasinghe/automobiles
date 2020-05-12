import {
  CREATE_EVENT_STARTED,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE,

} from './eventConstants';

const initialState = { events: [], loading: false, error: null };

const createEvent = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_EVENT_STARTED:
      return { ...state, loading: true, error: null };
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        event: [...state.events, payload],
      };
    case CREATE_EVENT_FAILURE:
      return { ...state, loading: false, error: payload.error };

    // case DELETE_EVENT:
    //   return [...state.filter((event) => event.id !== payload.id)];
    // case UPDATE_EVENT:
    //   return [
    //     ...state.filter((event) => event.id !== payload.id),
    //     payload,
    //     // Object.assign({}, payload),
    //   ];
    // case FETCH_EVENTS:
    //   return payload;

    default:
      return state;
  }
};

export default createEvent;
