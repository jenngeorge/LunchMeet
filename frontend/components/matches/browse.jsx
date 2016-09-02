import React from 'react';

// import components
import FilterForm from './filter_form';
import MatchIndex from './match_index';


const Browse = ({matches, currentUser, role, updateFilter, updateMatches}) => (
  <div className="browse-container">
    <h1>HI IM BROWSE</h1>
    <h1>browse loves you</h1>
    <FilterForm
      updateFilter={updateFilter}
      currentUser={currentUser}
      role={role}
      updateMatches={updateMatches} />
    <MatchIndex
      matches={matches}
      updateFilter={updateFilter} />
  </div>
);

export default Browse;
