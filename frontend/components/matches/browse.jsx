import React from 'react';

// import components
import FilterForm from './filter_form';
import MatchIndex from './match_index';


const Browse = ({matches, currentUser, role, zip_code, updateFilter, updateMatches}) => (
  <div className="browse-container">
    <h1>HI IM BROWSE</h1>
    <h1>browse loves you</h1>
    <FilterForm
      updateFilter={updateFilter}
      currentUser={currentUser}
      role={role}
      zip_code={zip_code}
      updateMatches={updateMatches} />
    <MatchIndex
      matches={matches}
      updateFilter={updateFilter}
      updateMatches={updateMatches} />
  </div>
);

export default Browse;
