import { QuestionConstants } from '../actions/question_actions';
import merge from 'lodash/merge';

const QuestionsReducer = function(state = {}, action){

  switch(action.type){

    case QuestionConstants.RECEIVE_QUESTIONS:
      console.log('questions reducer receive questions');
      return action.questions;
    case QuestionConstants.RECEIVE_SINGLE_QUESTION:
      console.log('questions reducer receive single question');
      const question = {[action.question.id]: action.question};
      const mergedQuestion = merge({}, state, question);
      return mergedQuestion;
    default:
      return state;
  }
};

export default QuestionsReducer;
