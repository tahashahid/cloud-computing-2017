import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase'
import registerServiceWorker from './registerServiceWorker';

var config = {
    apiKey: "AIzaSyClvjgk6E5APUxIhDS3tgz6rLbvtsSSweQ",
    authDomain: "todo-db-21af0.firebaseapp.com",
    databaseURL: "https://todo-db-21af0.firebaseio.com",
    projectId: "todo-db-21af0",
    storageBucket: "todo-db-21af0.appspot.com",
    messagingSenderId: "572834728398"
  };
  
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
