import { FilterConstants } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultFilter = Object.freeze({
	lookingForRole: "recruiter"
});

const FiltersReducer = function(state = _defaultFilter, action){
  if (action.type == FilterConstants.UPDATE_FILTER){
    const newFilter = {[action.filter]: action.value};
    return merge({}, state, newFilter);
  } else {
    return state;
  }
};

export default FiltersReducer;
