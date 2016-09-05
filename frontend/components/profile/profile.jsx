import React from 'react';
import { Link, hashHistory } from 'react-router';
import UpdateButton from './update_button';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.updateButton = this.updateButton.bind(this);
    this.listInterests = this.listInterests.bind(this);
  }

  updateButton(currentUser){
    if (this.props.user.id === this.props.currentUser.id){
      return(<UpdateButton currentUser={this.props.currentUser}/>);
    }
  }

  listInterests(){
    const interestObject = {
      mentor: {'10': "", '-5': "Being a mentor", '5': "Meeting a mentor"},
      hiring: {'10': "", '-5': "Hiring people", '5': "New opportunities"},
      friendship: {'10': "", '0': "Friendship"},
      collaboration: {'10': "", '0': "Project Collaboration"}
    };
    let interests = [];

    interests.push(interestObject.mentor[(this.props.user.mentor).toString()]);
    interests.push(interestObject.hiring[(this.props.user.hiring).toString()]);
    interests.push(interestObject.friendship[(this.props.user.friendship).toString()]);
    interests.push(interestObject.collaboration[(this.props.user.collaboration).toString()]);

    return interests.map(interest => {
      if (interest.length > 0){
        return (<li key={interest}>{interest}</li>);
      }
    });

  }

  componentDidMount(){
    this.props.requestSingleUser(this.props.matchId);
  }


  render(){

    if (Object.keys(this.props.user).length === 0 && this.props.user.constructor === Object){
      this.props.requestSingleUser(this.props.matchId);
      return (<div></div>);
    } else {
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
                    <h3>{this.props.user.location.neighborhood}</h3>
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
                    <ul>
                      {this.listInterests()}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

  }
} // end class

export default Profile;
