import React from 'react';
import MessageForm from './message_form';

class MessageIndex extends React.Component {
  constructor(props){
    super(props);
    this.renderMessages = this.renderMessages.bind(this);
    this.getReceiverId = this.getReceiverId.bind(this);
  }


  renderMessages(){
    if (this.props.conversation.messages.length === 0){
      return 'no messages';
    } else {
      return this.props.conversation.messages.map(message => {
        if (message.sender_id === this.props.currentUser.id){
          return <div key={message.id} className="sent-message">{message.content}</div> ;
        } else {
          return <div key={message.id} className="received-message">{message.content}</div> ;
        }
      });
    }
  }

  getReceiverId(){
    if (this.props.conversation.user_id === this.props.currentUser.id){
      return this.props.conversation.other_user_id;
    } else {
      return this.props.conversation.user_id;
    }
  }


  render(){
    if (!this.props.conversation.messages){
      this.props.requestSingleConversation(this.props.conversationId);
      return (<div></div>);
    } else {
      return (
        <div className="message-container">

          <div className="message-index-container">
            {this.renderMessages()}
          </div>
          <div className="message-form-container">
            <MessageForm
              sendMessage={this.props.sendMessage}
              senderId={this.props.currentUser.id}
              receiverId={this.getReceiverId()}
              conversationId={this.props.conversationId}/>
          </div>
        </div>
      );
    }
  }

} //class end

export default MessageIndex;
