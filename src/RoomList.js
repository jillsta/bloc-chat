import React, { Component } from 'react';


class RoomList extends Component {
	constructor(props) {
	super(props);
	this.state = {
		rooms: [],
	};
	this.roomsRef = this.props.firebase.database().ref('rooms');
}

componentDidMount(){
	this.roomsRef.on('child_added', snapshot => {
		const room = snapshot.val();
		room.key = snapshot.key;
		this.setState({ rooms: this.state.rooms.concat( room ) })
	});
}

createRoom(e) {
    this.roomsRef.push({
        name: e.name
    });
}


render() {
     return (
         <section className="App">
         {
         	this.state.rooms.map( (name,key) =>	
         		<div key={key}>
         		<h1 className="key">{name.key}</h1>
         		<div className="key">{ name.name }</div>
         		</div>
         		)
         }

         <div className="create-room">

         </div>
                </section>
     );
   }
}


export default RoomList;