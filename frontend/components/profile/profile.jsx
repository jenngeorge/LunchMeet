import React from 'react';
import { Link, hashHistory } from 'react-router';

class Profile extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="profile-container">
        <h1>IN UR PROFILE</h1>
        <h1>IN UR PROFILE {currentUser.username}</h1>
        <h1>IN UR PROFILE {currentUser.username}</h1>
        <h1>IN UR PROFILE {currentUser.username}</h1>
        <h1>IN UR PROFILE {currentUser.username}</h1>
      </div>);
  }
}

export default Profile;
