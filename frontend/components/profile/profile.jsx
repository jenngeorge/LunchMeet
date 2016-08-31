import { connect } from 'react-redux';
import Profile from './profile';
import { signin, signout } from '../../actions/session_actions';
import {signupAction} from '../../actions/user_actions';


const mapStateToProps = state => ({
  signedIn: !!state.session.currentUser,
  isCurrentUser:
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = (formType === 'signin') ? signin : signupAction;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
