import React from 'react';
// import components

import MatchIndex from './match_index';
import FilterForm from './filter_form';

class Browse extends React.Component{
  constructor(props){
    super(props);

  }

  componentWillUnmount(){
    debugger
  }

  render(){
    return(
      <div className="browse-container">
        <FilterForm
          updateFilter={this.props.updateFilter}
          currentUser={this.props.currentUser}
          role={this.props.role}
          zip_code={this.props.zip_code}
          updateMatches={this.props.updateMatches} />
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
