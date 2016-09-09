import React from 'react';
import MatchIndexItem from './match_index_item';

class MatchIndex extends React.Component {
  constructor(props){
    super(props);

    this.renderMatches = this.renderMatches.bind(this);
    this._matchPercentage = this._matchPercentage.bind(this);
    this._questionPercent = this._questionPercent.bind(this);
    this._lookingPercent = this._lookingPercent.bind(this);
    this._questionOptions = this._questionOptions.bind(this);
  }

  _matchPercentage( otherUser, currentUser){
    const start = 50;
    let questionPercent = this._questionPercent( otherUser, currentUser);
    let lookingPercent = this._lookingPercent( otherUser, currentUser);
    return start + questionPercent + lookingPercent;
  }

  _questionOptions(currentUser, otherUser, sharedResponses){
    //get the question and which option a user chose
    let cuOptions = {};
    Object.keys(currentUser.question_options).map(key => {
      let questionId = currentUser.question_options[key].question_id;
      if (sharedResponses.includes(`${questionId}`) ){
        cuOptions[questionId] = currentUser.question_options[key].id;
      }
    });

    return cuOptions;
  }

  _questionPercent(otherUser, currentUser){
    let maxPercent = 40;
    let total = 0;
    //which questions have they both answered?
    let cuKeys = Object.keys(currentUser.questions);
    let otherKeys = Object.keys(otherUser.questions);
    let sharedResponses = [];
    cuKeys.map(key => {
      if (otherKeys.includes(key)) {
        sharedResponses.push(key);
      }
    });

    if (Object.keys(sharedResponses).length === 0){
      return 0;
    }

    let maxQvalue = maxPercent / sharedResponses.length;


    let cuOptions = this._questionOptions(currentUser, otherUser, sharedResponses);
    let otherOptions = this._questionOptions(otherUser, currentUser, sharedResponses);

    //get responses from options in cuOptions
    Object.keys(currentUser.question_responses).map(key => {
      let response = currentUser.question_responses[key];
      let cuOptionsValues = [];
      Object.keys(cuOptions).map(k => cuOptionsValues.push(cuOptions[k]));

      if (cuOptionsValues.includes(response.question_option_id)){
        //compare with otherOptions and calc value from importance
        let questionId = Object.keys(cuOptions).map(qKey => {
          if (cuOptions[qKey] === response.id){
            return key;
          }
        });


        if (response.acceptable === otherOptions[questionId]){
          total += maxQvalue / parseInt(response.importance);
        } else {
          total -= maxQvalue / parseInt(response.importance);
        }
      }
    });

    return total;
  }

  _lookingPercent( otherUser, currentUser ){
    if (otherUser.looking_for === currentUser.role){
      return 10;
    } else {
      return -10;
    }
  }



  renderMatches(){
    const matchKeys = Object.keys(this.props.matches);
    return matchKeys.map( key => {
      if (this.props.matches[key].id === this.props.currentUser.id){
        return;
      } else {

        let matchPercent = this._matchPercentage(this.props.matches[key], this.props.currentUser);
        return (
          <MatchIndexItem
            match={this.props.matches[key]}
            matchPercent={matchPercent}
            key={key} />
        );
      }
    });
  }

  render(){

    return(
      <div className="matchindex-container">
        <div className="matches-list inner">
          {this.renderMatches()}
        </div>
      </div>
    );
  }
}


export default MatchIndex;
