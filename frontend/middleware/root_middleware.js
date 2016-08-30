import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import UsersMiddleware from './users_middleware';


const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  UsersMiddleware
);

export default RootMiddleware;
