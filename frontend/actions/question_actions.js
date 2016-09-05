export const QuestionConstants = {
  MAKE_RESPONSE: "MAKE_RESPONSE",
  REQUEST_QUESTIONS: "REQUEST_QUESTIONS",
  REQUEST_SINGLE_QUESTION: "REQUEST_SINGLE_QUESTION",
  RECEIVE_QUESTIONS: "RECEIVE_QUESTIONS",
  RECEIVE_SINGLE_QUESTION: "RECEIVE_SINGLE_QUESTION"
};

export const makeResponse = response => ({
  type: QuestionConstants.MAKE_RESPONSE,
  response
});

export const requestQuestions = () => ({
  type: QuestionConstants.REQUEST_QUESTIONS,
});

export const receiveQuestions = questions => ({
  type: QuestionConstants.RECEIVE_QUESTIONS,
  questions
});

export const requestSingleQuestion = id => ({
  type: QuestionConstants.REQUEST_SINGLE_QUESTION,
  id
});

export const receiveSingleQuestion = question => ({
  type: QuestionConstants.RECEIVE_SINGLE_QUESTION,
  question
});
