import React from 'react';

class ConversationItem extends React.Component {
  constructor(props){
    super(props);

    this.otherUsername = this.otherUsername.bind(this);
    this.lastMessage = this.lastMessage.bind(this);
  }

  otherUsername(){
    if (this.props.currentUser.id === this.props.conversation.user_id){
      return this.props.conversation.other_user.username;
    } else {
      return this.props.conversation.user.username;
    }
  }

  lastMessage(){
    if (this.props.conversation.messages.length === 0){
      return 'no messages';
    } else {
      let latest = this.props.conversation.messages.length;
      return this.props.conversation.messages[latest-1].content;
    }
  }

  render(){

    return (
      <div className="conversation-container">
        <div className="other_user">
          {this.otherUsername()}
        </div>
        <div className="message-preview">
          {this.lastMessage()}
        </div>
      </div>
    );
  }


} // class end

export default ConversationItem;
