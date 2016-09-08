import { connect } from 'react-redux';
import MessageButton from './message_button';

import {
  makeConversation,
  sendMessage,
  requestSingleConversation,
  requestConversations }
  from '../../actions/conversation_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  conversations: state.conversations
});

const mapDispatchToProps = dispatch => ({
  requestConversations: () => dispatch(requestConversations()),
  makeConversation: conversation => dispatch(makeConversation(conversation))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageButton);
