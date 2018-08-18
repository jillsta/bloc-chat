import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './RoomList';

//src="https://www.gstatic.com/firebasejs/5.3.1/firebase.js"

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCT4ly9M2fNLRYwvQDRTxEUOgljc0opGT0",
    authDomain: "bloc-chat-5a1ba.firebaseapp.com",
    databaseURL: "https://bloc-chat-5a1ba.firebaseio.com",
    projectId: "bloc-chat-5a1ba",
    storageBucket: "bloc-chat-5a1ba.appspot.com",
    messagingSenderId: "19757901664"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
      <RoomList 
        firebase={firebase}
      />
      </div>
    );
  }
}



export default App;
