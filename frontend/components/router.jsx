import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
//containers
import AuthContainer from './auth/auth_container';
import HomeContainer from './home/home_container';
import ProfileContainer from './profile/profile_container';
import ProfileFormContainer from './profile/profile_form_container';
import BrowseContainer from './matches/browse_container';


class AppRouter extends React.Component{
  constructor(props){
    super(props);

    this._redirectIfSignedIn = this._redirectIfSignedIn.bind(this);
    this._ensureSignedIn = this._ensureSignedIn.bind(this);
    this._toSignup = this._toSignup.bind(this);
  }

  _ensureSignedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (!currentUser) {
      replace('/signup');
    }
  }

  _toSignup(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;

    if (!currentUser && nextState.location.pathname === "/" ) {
      replace('/signup');
    }
  }

  _redirectIfSignedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }


  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component ={ App } onEnter={this._toSignup}>
          <IndexRoute component = {HomeContainer} />
          <Route path='/signup' component={ AuthContainer }  onEnter={this._redirectIfSignedIn}/>
          <Route path='/signin' component={ AuthContainer }  onEnter={this._redirectIfSignedIn}/>
          <Route path='/profile' component={ ProfileContainer } onEnter={this._ensureSignedIn} />
          <Route path='/profile/update' component={ ProfileFormContainer } onEnter={this._ensureSignedIn} />
          <Route path='/browse' component={ BrowseContainer } onEnter={this._ensureSignedIn} />
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
