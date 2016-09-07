import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import UsersReducer from './users_reducer';
import FiltersReducer from './filters_reducer';
import QuestionsReducer from './questions_reducer';
import ConversationsReducer from './conversations_reducer';

const RootReducer = combineReducers({
  users: UsersReducer,
  filters: FiltersReducer,
  session: SessionReducer,
  question: QuestionsReducer,
  conversations: ConversationsReducer
});

export default RootReducer;
