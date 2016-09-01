import { connect } from 'react-redux';
import { signoutAction } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signoutAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
