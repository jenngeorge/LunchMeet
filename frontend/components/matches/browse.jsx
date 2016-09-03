import React from 'react';
// import components

import MatchIndex from './match_index';

class Browse extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="browse-container">

        <MatchIndex
          matches={this.props.matches}
          updateMatches={this.props.updateMatches}
          updateFilter={this.props.updateFilter}
          currentUser={this.props.currentUser}
          role={this.props.role}
          zip={this.props.zip_code} />
      </div>
    );
  }

} //class end


export default Browse;
