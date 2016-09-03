//user info from user :show

import { connect } from 'react-redux';
import Profile from './profile';
import { updateUserAction } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {

  debugger
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
  // updateProfile: (user) => dispatch(updateUserAction(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
