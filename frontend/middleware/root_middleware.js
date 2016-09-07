import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import UsersMiddleware from './users_middleware';
import QuestionsMiddleware from './question_middleware';
import ConversationsMiddleware from './conversation_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  UsersMiddleware,
  QuestionsMiddleware,
  ConversationsMiddleware
);

export default RootMiddleware;
