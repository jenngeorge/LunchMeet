import React from 'react';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);

    this.unansweredQuestions = this.unansweredQuestions.bind(this);
  }

  componentDidMount(){
    this.props.requestQuestions();
  }

  questionOptions(question, name){
    return question.question_options.map(option => {
      return (
        <li>
          <input type="radio" name={name}/>
          {option.description}
        </li>
      );
    });
  }

  unansweredQuestions(){
    const that = this;

    return Object.keys(this.props.question).map(key => {
      let question = that.props.question[key];
      let respondedTo = (that.props.user.question_options.filter(function(option) {
        return option.question_id === question.id;})
        .length > 0);

        if (respondedTo === false){
          return (
            <div key={question.id} className="question-form-container">
              <div className="question-title">
                <h4>{question.title}</h4>
              </div>
              <div className="question-options">
                {that.questionOptions(question, "options")}
              </div>
              <div className="acceptable-options">
                <h4>Answers I'll accept</h4>
                {that.questionOptions(question, "acceptable")}
              </div>
              <div className="response-explanation">
                <h4>Explanation:</h4>
                <textarea />
              </div>

            </div>
          );
        }
    });


  }

  render(){
    if (Object.keys(this.props.question).length < 4 && this.props.question.constructor === Object){
      this.props.requestQuestions();
      return (<div></div>);
    } else {
      return (<div>{this.unansweredQuestions()}</div>);
    }

  }


} //class end

export default QuestionForm;
