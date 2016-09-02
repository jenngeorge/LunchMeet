import React from 'react';
import {Link, withRouter} from 'react-router';

class Greeting extends React.Component {
  constructor(props){
    super(props);

    this.sessionLinks = this.sessionLinks.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
    this.signedInOptions = this.signedInOptions.bind(this);
    this.signout = this.props.signout;
  }

  sessionLinks() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="/signin" activeClassName="current">Signin</Link>
        </li>
        <li>
          <Link to="/signup" activeClassName="current">Sign up!</Link>
        </li>
      </ul>
    );
  }

  handleSignout(e) {
    this.signout();
    this.props.router.replace("/signin");
  }

  signedInOptions() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="/browse" activeClassName="current" >Browse</Link>
        </li>
        <li>
          <Link to="/profile" activeClassName="current" >{this.props.currentUser.username}</Link>
        </li>
        <li>
          <button className="navbar-btn navbar-right" onClick={this.handleSignout}>Sign out</button>
        </li>
      </ul>
    );
  }

  render(){
    if (this.props.currentUser){
      return this.signedInOptions();
    } else {
      return this.sessionLinks();
    }
  }

}// class end

export default withRouter(Greeting);
