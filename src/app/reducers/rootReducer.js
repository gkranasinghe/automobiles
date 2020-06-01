import { combineReducers } from 'redux';
import eventReducer from '../../features/event/eventReducer';
import userReducer from '../../features/user/userReducer';
import queryReducer from '../../features/home/queryReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  events: eventReducer,
  user: userReducer,
  query: queryReducer,
});

export default rootReducer;
