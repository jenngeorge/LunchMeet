import React from 'react';

class ConversationIndex extends React.Component {
  constructor(props){
    super(props);
    debugger

  }

  componentDidMount(){
    this.requestConversations();
  }

  render(){

    return(
      <div>HI IM CONVERSATIONS</div>
    );
  }
}
