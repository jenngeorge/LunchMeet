import { connect } from 'react-redux';
import MessageIndex from './message_index';

import {
  makeConversation,
  sendMessage,
  requestSingleConversation,
  requestConversations }
  from '../../actions/conversation_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const conversationId = ownProps.params.conversationId;
  const conversation = state.conversations[conversationId] || {};

  return {
    conversationId,
    conversation,
    currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  sendMessage: message => dispatch(sendMessage(message))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageIndex);
