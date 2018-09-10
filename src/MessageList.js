import React, { Component } from 'react';

class MessageList extends Component {
	constructor(props) {
	super(props);
	this.state = {
		messages: [],
		value: "",
		roomId: [],
		user: []
	};
	this.messageRef = this.props.firebase.database().ref('messages');
	this.handleChange = this.handleChange.bind(this);
	this.createMessage = this.createMessage.bind(this);
}


componentDidMount(){
	this.messageRef.on('child_added', snapshot => {
		const message = snapshot.val();
		message.key = snapshot.key;
		this.setState({ messages: this.state.messages.concat( message ) })
	});
}

 handleChange(event) {
     this.setState({
     	value: event.target.value
     });
 }


 createMessage = (event) => {
     event.preventDefault();
     if (this.props.activeRoom === null) {
     	null
     } else {
     this.messageRef.push({	
        content: this.state.value,
        username: this.props.user.displayName,
        roomId: this.props.activeRoom 
    })}
     this.setState({
         value:""
     })
 }


render() {
    let messageRoom = this.state.messages.map((message,index)=>{
    		if (this.props.activeRoom == message.roomId)
			return <div key={index}> 
						<p>{message.content}</p>
						<h4>{message.username}</h4>
					</div>

    		}
     	)

     return (
		<section className="App">
		    <div className="create-room">
            <form  onSubmit={this.createMessage}>
            <label>
            Type Message
            <input type="content" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
            </div>	
					{this.props.activeRoom? messageRoom : "Please select a room" }
    	</section>
    );
}}
export default MessageList;