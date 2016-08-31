import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <ul className="nav navbar-nav navbar-right">
      <li>
        <Link to="/signin" activeClassName="current">Signin</Link>
      </li>
      <li>
        <Link to="/signup" activeClassName="current">Sign up!</Link>
      </li>
  </ul>
);

const personalGreeting = (currentUser, signout) => (
	<button className="navbar-btn navbar-right" onClick={signout}>Sign Out</button>
);

function Greeting({currentUser, signout}){
  if (currentUser){
    return personalGreeting(currentUser, signout);
  } else {
    return sessionLinks();
  }
}

export default Greeting;
