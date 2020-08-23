import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCRDXQWRN-DB6DuyycsqQDTidzLFWVDGN0",
  authDomain: "evernote-clone-ceedc.firebaseapp.com",
  databaseURL: "https://evernote-clone-ceedc.firebaseio.com",
  projectId: "evernote-clone-ceedc",
  storageBucket: "evernote-clone-ceedc.appspot.com",
  messagingSenderId: "865161849613",
  appId: "1:865161849613:web:b7a61a116ef65f36d75e44",
  measurementId: "G-YXH8VFN44F"
};
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
