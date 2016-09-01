import React from 'react';
import { Link, hashHistory } from 'react-router';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.user = this.props.user;

    this.neighborhoods = {
      "94102": "North of Market",
      "94013": "SOMA",
      "94107": "Portrero Hill",
      "94108": "Chinatown",
      "94109": "Nob Hill",
      "94110": "Inner Mission/ Bernal Heights",
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
      "94133": "North Beach/ Chinatown",
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
        <div className="profile-photo"><img src={this.user.photo_url}/></div>
        <div className="profile-username"><h1>{this.user.username}</h1></div>
        <div className="profile-type"><h1>{this.user.type}</h1></div>
        <div className="profile-location"><h1>{this.location(this.user.zip_code, this.neighborhoods)}</h1></div>
        <div className="profile-about"><h1>{this.user.about}</h1></div>
      </div>
    );
  }
}

export default Profile;
