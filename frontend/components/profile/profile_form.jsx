import React from 'react';
import { Link, hashHistory, withRouter} from 'react-router';
import QuestionContainer from '../questions/question_container';


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
      mentor: this.currentUser.mentor,
      hiring: this.currentUser.hiring,
      friendship: this.currentUser.friendship,
      collaboration: this.currentUser.collaboration,
      id: this.currentUser.id
		};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
  }



  update(field){
    return e => this.setState({[field]: e.currentTarget.value });
  }

  uploadPhoto(e){
    const that = this;
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        that.setState({photo_url: results[0].secure_url});
      }
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.updateProfile(this.state);
    this.props.router.push(`/${this.state.id}`);

  }

  render(){
    return (
      <div className="profile-container">
        <form onSubmit={this.handleSubmit} className="profile-form">

          <div className="profile-header-container">
            <div className="profile-header inner">
              <div className="profile-info">
                <div className="profile-photo">
                  <img src={this.state.photo_url} />
                </div>

                <div className="profile-basics">
                  <div className="upload-photo">
                    <button onClick={this.uploadPhoto}>Update Photo</button>
                    <input type="submit" value="Submit" className="submit-btn"/>
                  </div>
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
                      <select id="role" value={this.state.role} onChange={this.update("role")} defaultValue={this.state.role}>
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
                <textarea
                  value={this.state.about}
                  placeholder="Tell us about yourself!"
                  onChange={this.update("about")}/>

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
                    <label>
                      Mentorship
                      <select id="mentor" value={this.state.mentor} onChange={this.update("mentor")}>
                        <option value={-5}>Being a mentor</option>
                        <option value={5}>Finding a mentor</option>
                        <option value={10}>Not Interested</option>
                      </select>
                    </label>
                    <label>
                      Hiring
                      <select id="hiring" value={this.state.hiring} onChange={this.update("hiring")}>
                        <option value={-5}>Hiring people</option>
                        <option value={5}>New Opportunities</option>
                        <option value={10}>Not Interested</option>
                      </select>
                    </label>
                    <div>
                      <label>
                        <input className="checkbox" type="checkbox" defaultChecked={this.state.collaboration === 0}
                          onClick={this.update("collaboration")} value={this.state.collaboration === 0 ? 10 : 0} />
                        Project collaboration
                      </label>
                    </div>
                    <div>
                      <label>
                        <input className="checkbox" type="checkbox" defaultChecked={this.state.friendship === 0}
                          onClick={this.update("friendship")} value={this.state.friendship === 0 ? 10 : 0} />
                        Friendship
                      </label>
                    </div>
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
