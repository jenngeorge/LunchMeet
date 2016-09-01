import React from 'react';
import { Link, hashHistory } from 'react-router';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.user = this.props.user;

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
  }

  location(zip, neighborhoods){
    let zips = Object.keys(neighborhoods);
    if (zips.includes(zip)) {
      return this.neighborhoods[zip];
    } else {
      return "basically Mars";
    }
  }

  render(){
    return (
      <div className="profile-container">
        <div className="profile-header-container">
          <div className="profile-header inner">
            <div className="profile-info">
              <div className="profile-photo">
                <img src={this.user.photo_url}/>
              </div>
              <div className="profile-basics">
                <div className="profile-username">
                  <h2>{this.user.username}</h2>
                </div>
                <div className="profile-sub-basic">
                  <h3>{this.user.role}</h3>
                </div>
                <div className="profile-sub-basic">
                  <h3>{this.location(this.user.zip_code, this.neighborhoods)}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-about-container">
          <div className="profile-about inner">
            <h2>About</h2>
            <div className="profile-about"><p>{this.user.about}</p></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
