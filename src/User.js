//Create a User component that renders a sign-in button. 
//On click, the button should call Firebase's signInWithPopup method.


import React, { Component } from 'react';


class User extends Component {
constructor(props){
	super(props);
	this.state = {
		user: null,
	};

	this.loginUser = this.loginUser.bind(this);
}

//Create a User component that renders a sign-in button. 
//On click, the button should call Firebase's signInWithPopup method.

loginUser() {
	const provider = new this.props.firebase.auth.GoogleAuthProvider();
	this.props.firebase.auth().signInWithPopup( provider );
// 	from firebase documentation:
// 	firebase.auth().signInWithPopup(provider).then(function(result) {
// 	var token = result.credential.accessToken;
// 	var user = result.user;
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });
	}

componentDidMount() {
this.props.firebase.auth().onAuthStateChanged( user => {
  this.props.setUser(user);
});
}

render () {
return (

		<div>
			<button onClick={this.loginUser}> button
			</button>
		</div>



	)
}
}

export default User;

