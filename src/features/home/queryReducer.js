import { UPDATE_QUERY } from './queryConstants';

const initialState = {};

const createEvent = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_QUERY:
      return {
        ...state,

        query: { ...state.query, ...payload },
      };

    default:
      return state;
  }
};

export default createEvent;
