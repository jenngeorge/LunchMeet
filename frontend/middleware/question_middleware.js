//question API util

import {
  fetchQuestions,
  fetchSingleQuestion,
  createResponse
} from '../util/question_api_util';

//question actions
import {
  QuestionConstants,
  makeResponse,
  requestQuestions,
  receiveQuestions,
  requestSingleQuestion,
  receiveSingleQuestion
} from '../actions/question_actions';

//session actions
import { receiveCurrentUser,
         receiveErrors,
         SessionConstants
       } from '../actions/session_actions';

import {requestSingleUser} from '../actions/user_actions';

export default ({getState, dispatch }) => next => action => {
  //success constants
  const singleQuestionSuccess = question => dispatch(receiveSingleQuestion(question));
  const questionsSuccess = data => dispatch(receiveQuestions(data));
  const makeResponseSuccess = (user) => dispatch(receiveCurrentUser(user));
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  const result = next(action);

  switch(action.type){
    case QuestionConstants.MAKE_RESPONSE:
      console.log('questions middleware make response');
      createResponse(action.response, makeResponseSuccess, errorCallback);
      break;
    case QuestionConstants.REQUEST_QUESTIONS:
      console.log('questions middleware request questions');
      fetchQuestions(questionsSuccess);
      break;
    case QuestionConstants.REQUEST_SINGLE_QUESTION:
      console.log('questions middleware request single question');
      fetchSingleQuestion(action.id, singleQuestionSuccess);
      break;

    default:
      break;
  }
  return result;
};
