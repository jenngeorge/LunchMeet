import React from 'react';
import { Link, hashHistory, withRouter} from 'react-router';


class ProfileForm extends React.Component {
  constructor(props){
    super(props);
    this.currentUser = this.props.currentUser;
    this.updateProfile = this.props.updateProfile;

    this.state = {
			username: this.currentUser.username,
      photo_url: this.currentUser.photo_url,
			role: this.currentUser.role,
      zip_code: this.currentUser.zip_code,
			looking_for: this.currentUser.looking_for,
      about: this.currentUser.about,
      id: this.currentUser.id
		};

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  handleSubmit(e){
    e.preventDefault();
    this.updateProfile(this.state);
    this.props.router.replace("/profile");
  }

  render(){
    return (
      <div className="profile-container">
        <form onSubmit={this.handleSubmit} className="profile-form">

          <div className="profile-header-container">
            <div className="profile-header inner">
              <div className="profile-info">
                <div className="profile-photo">
                  <img src={this.state.photo_url}/>
                </div>

                <div className="profile-basics">
                  <div className="profile-username">
                    <label> Username:
                      <input type="text"
                        value={this.state.username}
                        onChange={this.update("username")}
                        className="signin-input" />
                    </label>
                  </div>

                  <div className="profile-sub-basic">
                    <label> I am a
                      <select id="role" value={this.state.role} onChange={this.update("role")} defaultValue="developer">
                        <option value="developer">Developer</option>
                        <option value="designer" >Designer</option>
                        <option value="sales" >Salesperson</option>
                        <option value="recruiter" >Recruiter</option>
                        <option value="business" >Business/Operations person</option>
                      </select>
                    </label>
                  </div>
                  <div className="profile-sub-basic">
                    <label> my zip code:
                      <input type="text"
                        value={this.state.zip_code}
                        onChange={this.update("zip_code")}/>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-content-container">
            <div className="profile-content-container inner ">
              <div className="profile-about col-lg-8 col-sm-6">
                <h2>About</h2>
                <input type="textarea"
                  value={this.state.about}
                  placeholder="Where to begin..."
                  onChange={this.update("about")}/>
                <input type="submit" value="Submit" className="submit-btn"/>
              </div>
              <div className="profile-sidebox-container col-lg-4 col-sm-6">
                <div className ="profile-sidebox">
                  <div className="profile-looking">
                    <label> Looking to meet
                      <select id="role" value={this.state.looking_for} onChange={this.update("looking_for")} defaultValue="developer">
                        <option value="developer">Developers</option>
                        <option value="designer" >Designers</option>
                        <option value="sales" >Salespeople</option>
                        <option value="recruiter" >Recruiters</option>
                        <option value="business" >Business/Operations People</option>
                      </select>
                    </label>
                  </div>
                  <div className="profile-interests">
                    <h4>Interested in</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </form>
    </div>
    );
  }
}

export default withRouter(ProfileForm);
