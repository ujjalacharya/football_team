import app from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyDQ9UqABSO5LbU7QhtMSZAKRrVVae2Ea2c",
  authDomain: "m-city-d4c15.firebaseapp.com",
  databaseURL: "https://m-city-d4c15.firebaseio.com",
  projectId: "m-city-d4c15",
  storageBucket: "m-city-d4c15.appspot.com",
  messagingSenderId: "648381341366"
};


app.initializeApp(config);

const firebaseDb = app.database();
const firebaseMatches = firebaseDb.ref("matches")

export {
  app,
  firebaseMatches
}