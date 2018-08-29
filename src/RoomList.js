import React, { Component } from 'react';
import MessageList from './MessageList';

class RoomList extends Component {
	constructor(props) {
	super(props);
	this.state = {
		rooms: [],
        value: [],
        roomKey: [],
	};
	this.roomsRef = this.props.firebase.database().ref('rooms');


this.handleChange = this.handleChange.bind(this)
this.createRoom = this.createRoom.bind(this)
this.clickRoom = this.clickRoom.bind(this)
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
        name: this.state.value });
        this.setState.value = ""
}

clickRoom(key) {
    let roomKey;
    this.setState({roomKey: key});
    console.log(key);
}


render() {
     return (
         <section className="App">
         <div>
         <table>
         <tbody>
         {
         	this.state.rooms.map( (name,key) =>	
         		<tr key={key} onClick={(e) => this.clickRoom(key)}>
                {/*<td className={key}>{ name.key }</td>*/} 
         		<td className={key}>{ name.name }</td>
         		</tr>
         		)
         }
         </tbody>
         </table>
         </div>
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
     );
   }
}


export default RoomList;