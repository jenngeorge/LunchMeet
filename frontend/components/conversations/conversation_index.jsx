import React from 'react';
import ConversationItem from './conversation_index_item';

class ConversationIndex extends React.Component {
  constructor(props){
    super(props);

    this.renderConversations = this.renderConversations.bind(this);
  }

  componentDidMount(){
    this.props.requestConversations();
  }

  renderConversations(){
    const conversationKeys = Object.keys(this.props.conversations);
    return conversationKeys.map(key => {
      return (
        <ConversationItem
          conversation={this.props.conversations[key]}
          currentUser={this.props.currentUser}
          key={key} />);
    });
  }

  render(){

    return(
      <div className="conversation-index-container">
        {this.renderConversations()}
      </div>
    );
  }
}

export default ConversationIndex;
