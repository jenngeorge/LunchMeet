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

const signedInOptions = (currentUser, signout) => (
  <ul className="nav navbar-nav navbar-right">
    <li>
      <Link to="/profile" activeClassName="current" >{currentUser.username}</Link>
    </li>
    <li>
      <button className="navbar-btn navbar-right" onClick={signout}>Sign Out</button>
    </li>
  </ul>
);

function Greeting({currentUser, signout}){
  if (currentUser){
    return signedInOptions(currentUser, signout);
  } else {
    return sessionLinks();
  }
}

export default Greeting;
