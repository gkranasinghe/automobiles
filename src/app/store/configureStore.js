import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

export const configureStore = (preloadedState) => {
  const store = createStore(rootReducer, preloadedState);
  return store;
};
