import { connect } from 'react-redux';
import ProfileForm from './profile_form';
import { updateUserAction } from '../../actions/user_actions';

const mapStateToProps = state => ({
  state: state,
  currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
  updateProfile: (currentUser) => dispatch(updateUserAction(currentUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);
