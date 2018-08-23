import React, { Component } from 'react';

class RoomList extends Component {
	constructor(props) {
	super(props);
	this.state = {

	};
	this.roomsRef = this.props.firebase.database().ref('messages');
}



componentDidMount(){
	this.roomsRef.on('child_added', snapshot => {
		const message = snapshot.val();
		message.key = snapshot.key;
		this.setState({ messages: this.state.messages.concat( message ) })
	});
}

<section className="App">
         {
         	this.state.rooms.map( (name,key) =>	
         		<div key={key}>
                <div className={key}>{ name.key }</div>
         		<div className={key}>{ messages.key }</div>
         		</div>
         		)
         }

            <div className="create-room">
            <form onSubmit={this.createRoom}>
            <label>
            Input Room Name
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
            </div>
        </section>