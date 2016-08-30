import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/signin" activeClassName="current">Signin</Link>
    &nbsp;or&nbsp;
    <Link to="/signup" activeClassName="current">Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, signout) => (
	<hgroup className="header-group">
		<h2 className="header-name">Hi, {currentUser.username}!</h2>
		<button className="header-button" onClick={signout}>Sign Out</button>
	</hgroup>
);

function Greeting({currentUser, signout}){
  if (currentUser){
    return personalGreeting(currentUser, signout);
  } else {
    return sessionLinks();
  }
}

export default Greeting;
