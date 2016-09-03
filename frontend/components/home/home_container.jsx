
import { connect } from 'react-redux';
import Home from './home';
import { updateFilter } from '../../actions/filter_actions';
import { requestUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  requestUsers: () => dispatch(requestUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
