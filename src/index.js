import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { configureStore } from './app/store/configureStore';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from './app/config/firebase';
import { createFirestoreInstance } from 'redux-firestore';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';

const store = configureStore();
const rrfConfig = {
  userProfile: 'users', // where profiles are stored in database
  // presence: 'presence', // where list of online users is stored in database
  // sessions: 'sessions',
  useFirestoreForProfile: true,
  // attachAuthIsReady: true,
  // updateProfileOnLogin: false,
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
