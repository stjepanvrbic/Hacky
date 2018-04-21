import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBMP--MH4bQETizYZjSVgyAUhmpUE45bSI",
    authDomain: "hacky-1811d.firebaseapp.com",
    databaseURL: "https://hacky-1811d.firebaseio.com",
    projectId: "hacky-1811d",
    storageBucket: "hacky-1811d.appspot.com",
    messagingSenderId: "599467391517"
  };

firebase.initializeApp(config);

var firebaseDbh = firebase.database();

module.exports = firebaseDbh;