import {
  UPDATE_EVENT_STARTED,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_FAILURE,
} from './userConstants';

const initialState = { listing: null, loading: false, error: null };

const updateEvent = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_EVENT_STARTED:
      return { listing: payload, loading: true, error: null };
    case UPDATE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case UPDATE_EVENT_FAILURE:
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

export default updateEvent;
