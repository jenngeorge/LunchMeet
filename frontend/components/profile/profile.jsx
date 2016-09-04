import React from 'react';
import { Link, hashHistory } from 'react-router';
import UpdateButton from './update_button';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.updateButton = this.updateButton.bind(this);
  }

  updateButton(currentUser){
    if (this.props.user.id === this.props.currentUser.id){
      return(<UpdateButton currentUser={this.props.currentUser}/>);
    }
  }


  componentWillMount(){
    this.props.requestUsers();
  }

  render(){
    // if (this.props.user.id === this.props.currentUser.id){
    //   this.neighborhood = this.props.currentUser.location.neighborhood;
    // } else {
    //   this.neighborhood = this.props.user.location.neighborhood;
    // }
    return (
      <div className="profile-container">
        <div className="profile-header-container">
          <div className="profile-header inner">
            <div className="profile-info">
              <div className="profile-photo">
                <img src={this.props.user.photo_url}/>
              </div>
              <div className="profile-basics">
                <div className="profile-username">
                  <h2>{this.props.user.username}</h2>
                </div>
                <div className="profile-sub-basic">
                  <h3>{this.props.user.role}</h3>
                </div>
                <div className="profile-sub-basic">
                  <h3>{this.props.user.zip_code}</h3>
                </div>
              </div>
              {this.updateButton(this.props.currentUser)}
            </div>
          </div>
        </div>

        <div className="profile-content-container">
          <div className="profile-content-container inner ">
            <div className="profile-about col-lg-8 col-sm-6">
              <h2>About</h2>
              <div className="profile-about"><p>{this.props.user.about}</p></div>
            </div>
            <div className="profile-sidebox-container col-lg-4 col-sm-6">
              <div className ="profile-sidebox">
                <div className="profile-looking">
                  <h4>Looking for: {this.props.user.looking_for}</h4>
                </div>
                <div className="profile-interests">
                  <h4>Interested in</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
