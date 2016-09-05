// questions info from question: index

import { connect } from 'react-redux';
import Question from './question';
import { makeResponse, requestQuestions, requestSingleQuestion }
  from '../../actions/question_actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  // requestQuestions: () => dispatch(requestQuestions()),
  // requestSingleQuestion: id => dispatch(requestSingleQuestion(id)),
  // makeResponse: response => dispatch(makeResponse(response))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
