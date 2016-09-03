import React from 'react';
import MatchIndexItem from './match_index_item';
import FilterForm from './filter_form';

class MatchIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const matchKeys = Object.keys(this.props.matches);
    return(
      <div className="matchindex-container">
        <FilterForm
          updateFilter={this.props.updateFilter}
          currentUser={this.props.currentUser}
          role={this.props.role}
          zip_code={this.props.zip_code}
          updateMatches={this.props.updateMatches} />
        
        <div className="matches-list">
          <h1>in the match index</h1>
          {
            matchKeys.map( key => (
              <MatchIndexItem match={this.props.matches[key]} key={key} />
            ))
          }
        </div>
      </div>
    );
  }
}


export default MatchIndex;
