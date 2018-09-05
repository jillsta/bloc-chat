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

