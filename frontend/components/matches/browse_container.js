import {connect} from 'react-redux';
import Browse from './browse';
import { updateFilter } from '../../actions/filter_actions';
import { requestUsers } from '../../actions/user_actions';

// import filters

const mapStateToProps = state => ({
  matches: state.users,
  role: state.filters.role,
  zip_code: state.filters.zip_code,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  updateMatches: () => dispatch(requestUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
