import React, { Component } from 'react';
import RoomList from './RoomList';

class MessageList extends Component {
	constructor(props) {
	super(props);
	this.state = {
		messages: [],
		key: "",
		isHidden: "true",
	};
	this.messageRef = this.props.firebase.database().ref('messages');
	this.selectMessage = this.selectMessage.bind(this);
}

selectMessage(key){
	const {isHidden} = this.state;
	this.setState({
		isHidden: !isHidden,
	});
	/*if ({this.props.key} === message.key)
	{console.log(key)};
	/*show messages*/
}

componentDidMount(){
	this.messageRef.on('child_added', snapshot => {
		const message = snapshot.val();
		message.key = snapshot.key;
		this.setState({ messages: this.state.messages.concat( message ) })
	});
}


render() {
     return (
     	<this.props.
		<section className="App">
		<div>
		<RoomList key={key} />	
		<table>
			<tbody className="messages" >
	         	{
	         		this.state.messages.map( (message,key) => 
	         		<tr key={key}>
                	<td onClick={this.selectMessage}>{ message.key }</td>
                	<td hidden={this.state.isHidden}>{ message.content }</td>
         			{/*<td>{ message.username }</td>*/}
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

export default MessageList;