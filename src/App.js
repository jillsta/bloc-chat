import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './RoomList';
import MessageList from './MessageList';
import User from './User';


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
  //export const provider = new firebase.auth.GoogleAuthProvider();
  //export const auth = firebase.auth();



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeRoom: null,
      user: null
    }
  }

setActiveRoom=(selectRoom)=> {
  this.setState ({
    activeRoom: selectRoom
  })}

//You'll need to create a setUser method on App, and pass that method down to the  
//User component as a prop.
//setUser() {
//  this.setState ({
//    user: newUser
//  })
//}

// Finally, to respond to sign-in and sign-out events in Firebase, 
//add a  componentDidMount method to the User component that registers an  
//onAuthStateChanged event handler.

// componentDidMount() {
// this.props.firebase.auth().onAuthStateChanged( user => {
//   this.props.setUser(user);
// });
//}

setUser

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

      <User onClick={this.signIn} setUser={this.setUser} Sign In
      />
      </div>
    );
  }
}



export default App;

