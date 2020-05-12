import { combineReducers } from 'redux';
import eventReducer from '../../features/event/eventReducer';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';

const rootReducer = combineReducers({
  firebase:firebaseReducer,
  firestore:firestoreReducer,
  events: eventReducer,
});

export default rootReducer;
