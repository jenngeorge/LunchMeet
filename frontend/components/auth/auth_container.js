import { connect } from 'react-redux';
import AuthForm from './auth_form';
import { signin, signout } from '../../actions/session_actions';
import {signupAction} from '../../actions/user_actions';


const mapStateToProps = state => ({
  signedIn: !!state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'signin') ? signin : signupAction;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
