import React from 'react';
import MatchIndexItem from './match_index_item';

const MatchIndex = ({matches}) => {
  const matchKeys = Object.keys(matches);
  return (
    <div className="matchindex-container">
      <h1>in the match index</h1>
      {
        matchKeys.map( key => (
          <MatchIndexItem bench={matches[key]} key={key} />
        ))
      }
    </div>
  );
};

export default MatchIndex;
