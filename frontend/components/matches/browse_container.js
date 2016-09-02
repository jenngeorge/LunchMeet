import {connect} from 'react-redux';
import Browse from './browse';
import { updateFilter } from '../../actions/filter_actions';

// import filters

const mapStateToProps = state => ({
  matches: state.users,
  lookingForRole: state.filters.lookingForRole,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
