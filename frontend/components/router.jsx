import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import AuthContainer from './auth/auth_container';

import App from './app';
import HomeContainer from './home/home_container';


class AppRouter extends React.Component{
  constructor(props){
    super(props);

    this._redirectIfSignedIn = this._redirectIfSignedIn.bind(this);
    this._ensureLoggedIn = this._ensureSignedIn.bind(this);
  }

  _ensureSignedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (!currentUser) {
      replace('/signin');
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
        <Route path="/" component ={ App }>
          <IndexRoute component = {HomeContainer} />
          <Route path='/signup' component={ AuthContainer }  onEnter={this._redirectIfSignedIn}/>
          <Route path='/signin' component={ AuthContainer }  onEnter={this._redirectIfSignedIn}/>
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
