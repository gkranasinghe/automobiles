import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyAuRVgvUK3EiUDmQF87EaUtI9bn-6c1T6g',
  authDomain: 'automobiles-70cde.firebaseapp.com',
  databaseURL: 'https://automobiles-70cde.firebaseio.com',
  projectId: 'automobiles-70cde',
  storageBucket: 'automobiles-70cde.appspot.com',
  messagingSenderId: '197532761478',
  appId: '1:197532761478:web:a5baf38f09a989d76bc007',
  measurementId: 'G-HHBQP4T4HB',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
// firebase.analytics();

export default firebase;
