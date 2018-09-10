import React, { Component } from 'react';

class RoomList extends Component {
	constructor(props) {
	super(props);
	this.state = {
		rooms: [],
        value: "",
	};
	this.roomsRef = this.props.firebase.database().ref('rooms');


this.handleChange = this.handleChange.bind(this)
this.createRoom = this.createRoom.bind(this)
}

componentDidMount(){
	this.roomsRef.on('child_added', snapshot => {
		const room = snapshot.val();
		room.key = snapshot.key;
		this.setState({ rooms: this.state.rooms.concat( room ) })
	});
}

handleChange(event) {
    this.setState({value: event.target.value});
}


createRoom(event,value) {
    event.preventDefault();
    this.roomsRef.push({
        name: this.state.value })
    this.setState({
        value:""
    })
}



render() {
     return (
         <section className="App">
          <div className="create-room">
            <form onSubmit={this.createRoom}>
            <label>
            Input Room Name
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
            </div>
         <div className="list-rooms">
         <table>
         <tbody>
         {
         	this.state.rooms.map( (name,index) =>	
         		<tr key={index} onClick={(e)=>this.props.setActiveRoom(name.key)}>
         		<td className={index}>{ name.name }</td>
         		</tr>
         		)
         }
         </tbody>
         </table>
         </div>
           
        </section>
     );
   }
}


export default RoomList;