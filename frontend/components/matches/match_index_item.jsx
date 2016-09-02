import React from 'react';
import { hashHistory } from 'react-router';


class MatchIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const matchID = this.props.match.id;
    hashHistory.push("matches/" + matchID );
  }

  render() {
    const match = this.props.match;
    return (
      <div className="match-index-item"
           onClick={this.handleClick}>
        <div className="index-item-info">
          <span className="index-item-copy">
            I am {match.username} --
          </span>
          <span className="index-item-copy">
            {match.about}
          </span>
          <span className="index-item-copy">
            -- and I work near you in {match.location.neighborhood}
          </span>
        </div>

      </div>
    );
  }
}

export default MatchIndexItem;
