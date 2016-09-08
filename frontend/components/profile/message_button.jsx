import React from 'react';
import { hashHistory } from 'react-router';

class MessageButton extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.existingConversation = this.existingConversation.bind(this);
  }

  existingConversation(){
    const conversationKeys = Object.keys(this.props.conversations);
    for (let i = 0; i < conversationKeys.length; i++){
      let key = conversationKeys[i];
      let currentConvo = this.props.conversations[key];
      if (currentConvo.user_id === this.props.otherUserId ||
        currentConvo.other_user_id === this.props.otherUserId){
          hashHistory.push("/conversations/" + key);
          return true;
        }
    }
    return false;
  }

  handleClick(){
    if (this.existingConversation() === false){

      let newConvo = this.props.makeConversation(
        {conversation: {
          user_id: this.props.currentUserId,
          other_user_id: this.props.otherUserId}
        }
      );

    }


  }

  render(){
    return (
      <button onClick={this.handleClick}>
        Message
      </button>
    );
  }
}

export default MessageButton;
