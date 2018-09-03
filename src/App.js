import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './RoomList';
import MessageList from './MessageList';

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
  constructor(props){
    super(props);

    this.state = {
      activeRoom:null
    }
  }

setActiveRoom=(selectRoom)=> {
  this.setState ({
    activeRoom: selectRoom
  })}

  render() {
    return (
      <div className="App">
      <RoomList 
        firebase={firebase}
        setActiveRoom={this.setActiveRoom}
      />
      <MessageList
        firebase={firebase}
        activeRoom={this.state.activeRoom}
      />


      </div>
    );
  }
}



export default App;
