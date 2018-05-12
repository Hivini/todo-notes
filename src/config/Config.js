import firebase from 'firebase';

const UPLOADCARE_PUBLIC_KEY = "eeba1afd033cc025deeb";

const DB_CONFIG = {
    apiKey: "AIzaSyAkt54p8EpjwNILuQd5f0PGhhJsNR-fTWo",
    authDomain: "todo-notes-project.firebaseapp.com",
    databaseURL: "https://todo-notes-project.firebaseio.com",
    projectId: "todo-notes-project",
    storageBucket: "todo-notes-project.appspot.com",
    messagingSenderId: "1033965862522"
};

const app = firebase.initializeApp(DB_CONFIG);

let GphApiClient = require('giphy-js-sdk-core');
const GIFCLIENT = GphApiClient("3QjkiBeI51S425zDReIds7yUUnQEHsj7");

export {app, UPLOADCARE_PUBLIC_KEY, GIFCLIENT}

