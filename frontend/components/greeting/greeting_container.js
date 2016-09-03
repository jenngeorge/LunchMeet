import { connect } from 'react-redux';
import { signoutAction } from '../../actions/session_actions';
import Greeting from './greeting';
import { updateFilter } from '../../actions/filter_actions';
import { requestUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signoutAction()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  requestUsers: () => dispatch(requestUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
