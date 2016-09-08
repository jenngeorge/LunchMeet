import React from 'react';

class MessageIndex extends React.Component {
  constructor(props){
    super(props);
    this.renderMessages = this.renderMessages.bind(this);
  }


  renderMessages(){
    if (this.props.conversation.messages.length === 0){
      return 'no messages';
    } else {
      return this.props.conversation.messages.map(message => {
        if (message.sender_id === this.props.currenUser.id){
          return <div className="sent-message">{message.content}</div> ;
        } else {
          return <div className="received-message">{message.content}</div> ;
        }
      });
    }
  }


  render(){
    if (!this.props.conversation.messages){
      this.props.requestSingleConversation(this.props.conversationId);
      return (<div></div>);
    } else {
      return (
        <div className="message-index-container">
          HIIIIII
          {this.renderMessages()}
          <div>HIIIIII</div>
          <div>HIIIIII</div>
          <div>HIIIIII</div>
          <div>HIIIIII</div>
          <div>HIIIIII</div>
          <div>HIIIIII</div>
          <div>HIIIIII</div>
        </div>
      );
    }
  }

} //class end

export default MessageIndex;
