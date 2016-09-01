import React from 'react';
import { withRouter } from 'react-router';

class UpdateButton extends React.Component{

  constructor(props){
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(){
    const currentUser = this.props.currentUser;
    const url = `/profile/update`;
    this.props.router.push(url);
  }

  render(){
    return(
      <button className="update-button"
              onClick={this._handleClick}>
        Update Profile
      </button>
    );
  }
}

export default withRouter(UpdateButton);
