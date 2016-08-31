import { connect } from 'react-redux';
import Profile from './profile';
import { updateUserAction } from '../../actions/session_actions';


const mapStateToProps = state => ({
  signedIn: !!state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  updateProfile: (user) => dispatch(updateUserAction(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
