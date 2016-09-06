// questions info from question: index

import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { makeResponse, requestQuestions, requestSingleQuestion }
  from '../../actions/question_actions';

import { receiveCurrentUser } from '../../actions/session_actions';

import selectUnanswered from '../../reducers/selectors/unanswered_questions';

const mapStateToProps = (state) => ({
  question: state.question,
  user: state.session.currentUser,
  unansweredQuestions: selectUnanswered(state.question, state.session.currentUser)

});

const mapDispatchToProps = dispatch => ({
  requestQuestions: () => dispatch(requestQuestions()),
  // requestSingleQuestion: id => dispatch(requestSingleQuestion(id)),
  makeResponse: response => dispatch(makeResponse(response)),
  receiveCurrentUser: user => dispatch(receiveCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);
