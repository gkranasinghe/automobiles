import { UPDATE_QUERY, FETCH_STATE } from './queryConstants';

const initialState = { query: {} }; //typeofAd: 'Wanted'

const createEvent = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_QUERY:
      return {
        ...state,

        query: { ...state.query, ...payload },
      };
    case FETCH_STATE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default createEvent;
