//user info from user :show

import { connect } from 'react-redux';
import Profile from './profile';
import { updateUserAction } from '../../actions/session_actions';


const mapStateToProps = state => ({
  user: state.session.currentUser
  // change to be any one user
});


const mapDispatchToProps = dispatch => ({
  updateProfile: (user) => dispatch(updateUserAction(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
