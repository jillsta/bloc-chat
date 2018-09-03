import React, { Component } from 'react';

class MessageList extends Component {
	constructor(props) {
	super(props);
	this.state = {
		messages: [],
	};
	this.messageRef = this.props.firebase.database().ref('messages');
}


componentDidMount(){
	this.messageRef.on('child_added', snapshot => {
		const message = snapshot.val();
		message.key = snapshot.key;
		this.setState({ messages: this.state.messages.concat( message ) })
	});
}


render() {
    let messageRoom = this.state.messages.map((message,index)=>{
    		if (this.props.activeRoom == message.roomId)
			return <li key={index}> {message.content} </li>
    		}
     	)

     return (
		<section className="App">
			<div>
				<ul>	
					{ messageRoom }
        		</ul>
    		</div>
    	</section>
    );
}}
export default MessageList;