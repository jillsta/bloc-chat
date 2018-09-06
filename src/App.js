import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './RoomList';
import MessageList from './MessageList';
import User from './User';


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
      activeRoom: null,
      user: null,
    }
  }

setActiveRoom=(selectRoom) => {
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

/*componentDidMount() {
 this.props.firebase.auth().onAuthStateChanged( user => {
   this.props.setUser(user);
 });
}*/

setUser=(newUser) => {
  this.setState({
    user: newUser
  })}

  render() {
    console.log(this.state.user);

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

      <User 
        firebase={firebase} 
        onClick={this.signIn} 
        setUser={this.setUser}
        loginUser={this.loginUser}
        logoutUser={this.logoutUser}
        user={this.state.user}
      />
      </div>
    );
  }
}



export default App;

