import { connect } from 'react-redux';
import { signoutAction } from '../../actions/session_actions';
import Greeting from './greeting';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signoutAction()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
