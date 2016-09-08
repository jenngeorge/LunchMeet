//user info from user :show

import { connect } from 'react-redux';
import Profile from './profile';
import { updateUserAction } from '../../actions/session_actions';
import { requestUsers, requestSingleUser } from '../../actions/user_actions';
import { requestConversations } from '../../actions/conversation_actions';


const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const matchId = ownProps.params.matchId;
  const user = state.users[matchId] || {};

  return {
    matchId,
    user,
    currentUser
  };
};


const mapDispatchToProps = dispatch => ({
  requestUsers: () => dispatch(requestUsers()),
  requestSingleUser: id => dispatch(requestSingleUser(id)),
  requestConversations: () => dispatch(requestConversations())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
