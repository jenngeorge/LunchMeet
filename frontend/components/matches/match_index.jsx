import React from 'react';
import MatchIndexItem from './match_index_item';

class MatchIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const matchKeys = Object.keys(this.props.matches);
    return(
      <div className="matchindex-container">
        <h1>in the match index</h1>
        {
          matchKeys.map( key => (
            <MatchIndexItem match={this.props.matches[key]} key={key} />
          ))
        }
      </div>
    );
  }
}


export default MatchIndex;
