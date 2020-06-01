import { UPDATE_QUERY } from './queryConstants';
const updateQuery = (query) => ({
  type: UPDATE_QUERY,
  payload: {
    ...query,
  },
});

export default { updateQuery };
