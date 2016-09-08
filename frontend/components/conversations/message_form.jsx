import React from 'react';

class MessageForm extends React.Component {
  constructor(props){
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);

    this.state = {
      conversation_id: this.props.conversationId,
      sender_id: this.props.senderId,
      receiver_id: this.props.receiverId,
      content: ""
    };
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value });
  }

  _handleSubmit(e){
    e.preventDefault();
    this.props.sendMessage({message: this.state});
    this.props.requestSingleConversation(this.props.conversationId);
    this.setState({content: ""});
  }

  render(){
    return (
    <form onSubmit={this._handleSubmit} className="message-form">
      <textarea
          value={this.state.content}
          onChange={this.update("content")} />

      <input type="submit" value="Send" className="submit-btn"/>
    </form>
  );

  }

}

export default MessageForm;
