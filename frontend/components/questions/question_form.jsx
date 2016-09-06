import React from 'react';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: this.props.user.id,
      acceptable: 0,
      importance: 0,
      explanation: "",
      question_option_id: 0
    };

    this.unansweredQuestions = this.unansweredQuestions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount(){
    this.props.requestQuestions();
  }


  handleSubmit(e){
    e.preventDefault();
    let question_response = this.state;
    this.props.makeResponse({question_response});

  }

  update(field){
    return e => {
      this.setState({[field]: e.currentTarget.value });
    };
  }

  questionOptions(question, name){
    return question.question_options.map(option => {
      return (
        <li key={option.id}>
          <input type="radio"
            name={name}
            value={option.id}
            onChange={this.update(name)} />
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
              <form onSubmit={this.handleSubmit} className="question-form">
                <div className="question-title">
                  <h4>{question.title}</h4>
                </div>
                <div className="response-options">
                  <ul>
                    {that.questionOptions(question, "question_option_id")}
                  </ul>
                </div>
                <div className="response-options">
                  <div className="question-title">
                    <h4>Answers I'll accept</h4>
                  </div>
                  <ul>
                    {that.questionOptions(question, "acceptable")}
                  </ul>
                </div>
                <div className="question-title">
                  <h4>Importance</h4>
                </div>
                <ul>
                  <li key="importance1">
                    <input type="radio"
                      name="importance"
                      value={1}
                      onChange={this.update("importance")} />
                    Not Important
                  </li>
                  <li key="importance2">
                    <input type="radio"
                      name="importance"
                      value={2}
                      onChange={this.update("importance")} />
                    Somewhat Important
                  </li>
                  <li key="importance3">
                    <input type="radio"
                      name="importance"
                      value={3}
                      onChange={this.update("importance")} />
                    Very Important
                  </li>
                </ul>
                <div className="response-explanation">
                  <div className="question-title">
                    <h4>Explanation:</h4>
                  </div>
                  <textarea
                    value={this.state.explanation}
                    onChange={this.update("explanation")}/>
                </div>
                <input type="submit" value="Submit" className="submit-btn"/>
              </form>

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
