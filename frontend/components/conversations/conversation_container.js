
import { connect } from 'react-redux';
import ConversationIndex from './conversation_index';

import {
  makeConversation,
  sendMessage,
  requestSingleConversation,
  requestConversations }
  from '../../actions/conversation_actions';

const mapStateToProps = state => ({
  user: state.session.currentUser,
  conversations: state.session.currentUser.conversations
});

const mapDispatchToProps = dispatch => ({
  makeConversation: conversation => dispatch(makeConversation(conversation)),
  sendMessage: message => dispatch(sendMessage(message)),
  requestConversations: () => dispatch(requestConversations()),
  // requestSingleConversation: id => dispatch(requestSingleConversation(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationIndex);