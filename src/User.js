//Create a User component that renders a sign-in button. 
//On click, the button should call Firebase's signInWithPopup method.


import React, { Component } from 'react';


class User extends Component {
constructor(props){
	super(props);
	this.state = {
		user: [],
	};

	this.loginUser = this.loginUser.bind(this);
	this.logoutUser = this.logoutUser.bind(this);
}

//Create a User component that renders a sign-in button. 
//On click, the button should call Firebase's signInWithPopup method.

loginUser() {
	const provider = new this.props.firebase.auth.GoogleAuthProvider();
	this.props.firebase.auth().signInWithPopup( provider );
	}

logoutUser() {
	this.props.firebase.auth().signOut();
}	


componentDidMount() {
this.props.firebase.auth().onAuthStateChanged( user => {
  	this.props.setUser(user);

});
}

render () {
return (
		<div>
		<div> 
			{this.props.user? this.props.user.displayName : 'Guest'} </div>
			<button onClick={this.loginUser}> Login
			</button>
			<button onClick={this.logoutUser}> Logout 
			</button>
		</div>



	)
}
}

export default User;

