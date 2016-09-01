import React from 'react';
import { Link, hashHistory } from 'react-router';
import UpdateButton from './update_button';

class Profile extends React.Component {
  constructor(props){
    super(props);


    //TODO: refactor out and update to include zip ~ neighborhood ~ lat/long center point

    this.neighborhoods = {
      "94102": "North of Market",
      "94013": "SOMA",
      "94105": "Embarcadero South",
      "94103": "SOMA",
      "94104": "Fidi",
      "94107": "Portrero Hill",
      "94108": "Chinatown",
      "94109": "Nob Hill/ Russian Hill",
      "94110": "Inner Mission/ Bernal Heights",
      "94111": "Embarcadero North",
      "94112": "Ingleside-Excelsior",
      "94114": "Castro/Noe Valley",
      "94115": "Western Addition/ Japantown",
      "94116": "Parkside/Forest Hill",
      "94117": "Haight-Ashbury",
      "94118": "Inner Richmond",
      "94121": "Outer Richmond",
      "94122": "Sunset",
      "94123": "Marina",
      "94124": "Bayview/ Hunters Point",
      "94127": "St. Francis Wood/Miraloma/West Portal",
      "94131": "Twin Peaks-Glen Park",
      "94132": "Lake Merced",
      "94133": "North Beach/ Fisherman's Wharf",
      "94134": "Visitacion Valley/Sunnydale"
    };

    this.location = this.location.bind(this);
    this.updateButton = this.updateButton.bind(this);
  }

  location(zip, neighborhoods){
    let zips = Object.keys(neighborhoods);
    if (zips.includes(zip)) {
      return this.neighborhoods[zip];
    } else {
      return "basically Mars";
    }
  }


  updateButton(currentUser){
    if (this.props.user === this.props.currentUser){
      return(<UpdateButton currentUser={currentUser}/>);
    }
  }

  render(){
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
                {this.updateButton(this.currentUser)}
                <div className="profile-sub-basic">
                  <h3>{this.props.user.role}</h3>
                </div>
                <div className="profile-sub-basic">
                  <h3>{this.location(this.props.user.zip_code, this.neighborhoods)}</h3>
                </div>
              </div>
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
