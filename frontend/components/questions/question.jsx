import React from 'react';


class Question extends React.Component {
  constructor(props) {
    super(props);

    this.questions = this.questions.bind(this);
  }

  questions(){
    const that = this;

    return (this.props.user.question_responses.map(response => {

      let option = that.props.user.question_options.find(question_option =>
        question_option.id === response.question_option_id);
      let question = that.props.user.questions.find(response_question =>
        response_question.id === option.question_id);

      return(
        <div key={response.id} className="question-container">
          <div className="question-title">
            <h4>{question.title}</h4>
          </div>
          <div className="response-option">
            <h4>Answer:</h4>
            {option.description}
          </div>
          <div className="response-explanation">
            <h4>Explanation:</h4>
            {response.explanation}
          </div>
        </div>
      );
    }));
  }

  render(){

    if (this.props.user.question_responses.length === 0){
      return (
        <div className="questions-index">
          <h2>Questions</h2>
          <p>No question responses yet</p>
        </div>
      );
    } else {
      return (
        <div className="questions-index">
          <h2>Questions</h2>
          {this.questions()}
        </div>
      );
    }
  }

} //end class

export default Question;
