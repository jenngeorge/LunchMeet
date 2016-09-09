import React from 'react';
import MessageForm from './message_form';
import { Link } from 'react-router';

class MessageIndex extends React.Component {
  constructor(props){
    super(props);
    this.renderMessages = this.renderMessages.bind(this);
    this.getReceiver = this.getReceiver.bind(this);
  }


  renderMessages(){
    if (this.props.conversation.messages.length === 0){
      return 'Send the first message!';
    } else {
      return this.props.conversation.messages.map(message => {
        if (message.sender_id === this.props.currentUser.id){
          return <div key={message.id} className="sent-message clearfix"><p>{message.content}</p></div> ;
        } else {
          return <div key={message.id} className="received-message clearfix"><p>{message.content}</p></div> ;
        }
      });
    }
  }

  getReceiver(){
    if (this.props.conversation.user_id === this.props.currentUser.id){
      return this.props.conversation.other_user;
    } else {
      return this.props.conversation.user;
    }
  }



  render(){
    if (!this.props.conversation.messages){
      this.props.requestSingleConversation(this.props.conversationId);
      return (<div></div>);
    } else {
      return (
        <div className="message-container">
          <h2>Your conversation with
            <Link to={"/" + this.getReceiver().id}>
              {this.getReceiver().username}
            </Link>
          </h2>
          <div className="message-index-container">
            {this.renderMessages()}
          </div>
          <div className="message-form-container">
            <MessageForm
              sendMessage={this.props.sendMessage}
              senderId={this.props.currentUser.id}
              receiverId={this.getReceiver().id}
              conversationId={this.props.conversationId}
              requestSingleConversation={this.props.requestSingleConversation}/>
          </div>
        </div>
      );
    }
  }

} //class end

export default MessageIndex;
