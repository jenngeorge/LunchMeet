import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => (
  <div>
    <div className="navbar navbar-fixed-top">
      <div className="container-fluid">
        <Link to="/browse" className="navbar-brand">LunchMeet</Link>
        <GreetingContainer className="nav navbar-nav"/>
      </div>
    </div>
    {children}
  </div>
);

export default App;
