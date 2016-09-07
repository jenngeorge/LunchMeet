import React from 'react';
import MatchIndexItem from './match_index_item';

class MatchIndex extends React.Component {
  constructor(props){
    super(props);

    this.renderMatches = this.renderMatches.bind(this);
  }

  renderMatches(){
    const matchKeys = Object.keys(this.props.matches);
    return matchKeys.map( key => {
      if (this.props.matches[key].id === this.props.currentUser.id){
        return;
      } else {
        return <MatchIndexItem match={this.props.matches[key]} key={key} /> ;
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
