import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyALp3y8SUiQpIESEwzuNC0dcSrs4n-r52I",
    authDomain: "galleryapp-c91be.firebaseapp.com",
    databaseURL: "https://galleryapp-c91be.firebaseio.com",
    projectId: "galleryapp-c91be",
    storageBucket: "galleryapp-c91be.appspot.com",
    messagingSenderId: "849088768424",
    appId: "1:849088768424:web:d4565a49b91879e591159d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };