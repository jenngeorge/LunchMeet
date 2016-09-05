import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import UsersMiddleware from './users_middleware';
import QuestionsMiddleware from './question_middleware';


const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  UsersMiddleware,
  QuestionsMiddleware
);

export default RootMiddleware;
