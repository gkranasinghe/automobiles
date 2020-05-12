import rootReducer from '../reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const configureStore = () => {
  const loggerMiddleware = createLogger();
  const middlewares = [thunkMiddleware, loggerMiddleware];

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return store;
};

// const loggerMiddleware = createLogger();
// const middlewares = [
//   thunkMiddleware.withExtraArgument({ getFirebase, getFirestore }),
//   loggerMiddleware,
// ];
