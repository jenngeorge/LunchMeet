import React from 'react';
import { hashHistory } from 'react-router';


class MatchIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const matchId = this.props.match.id;
    hashHistory.push("/" + matchId);
  }

  render() {
    const match = this.props.match;
    return (
      <div className=" index-item-container col-lg-4 col-sm-6">
        <div className="match-index-item"
          onClick={this.handleClick}>
          <div className="index-item-photo">
            <img src={match.photo_url} />
          </div>
          <div className="index-item-info">
            <h4>{match.username}</h4>
            <h5>{match.role} - {match.location.neighborhood}</h5>
            <div className="index-description">
              <p>{match.about}</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default MatchIndexItem;
