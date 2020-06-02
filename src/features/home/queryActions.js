import { UPDATE_QUERY, FETCH_STATE } from './queryConstants';
const updateQuery = (query) => ({
  type: UPDATE_QUERY,
  payload: {
    ...query,
  },
});

const fetchState = () => ({
  type: FETCH_STATE,
});

export default { updateQuery, fetchState };
