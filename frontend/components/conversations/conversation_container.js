
import { connect } from 'react-redux';
import ConversationIndex from './conversation_index';

import {
  makeConversation,
  requestSingleConversation,
  requestConversations }
  from '../../actions/conversation_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  conversations: state.conversations
});

const mapDispatchToProps = dispatch => ({
  makeConversation: conversation => dispatch(makeConversation(conversation)),
  requestConversations: () => dispatch(requestConversations()),
  requestSingleConversation: id => dispatch(requestSingleConversation(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationIndex);
