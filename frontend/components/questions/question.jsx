import React from 'react';


class Question extends React.Component {
  constructor(props) {
    super(props);

    this.questions = this.questions.bind(this);
  }

  questions(){
    return (this.props.user.questions.map(question => {
      return(

        <div className="question-container">
          <div className="question-title">
            {question.title}
          </div>

        </div>

      );
  }))}

  render(){

    return (<div>{this.questions()}</div>);

  }
} //end class

export default Question;
