import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';
import Results from './pages/Results';
import CreateAccount from './pages/CreateAccount';
import Welcome from './pages/Welcome';
import Nav from './Nav';
import SignOutButton from './SignOut';
import {AuthContext} from './Auth';

function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={[user, setUser]}> 
      {user ? <h1>{user.data.username}</h1> : ''} 
      <Router>
      <Nav></Nav>
        <Link exact to="/create-account">Create Account</Link>
        <Link exact to="/login">Login</Link>
        <SignOutButton />

        <Switch>
          <Route path='/' exact component={Welcome} />
          <Route path='/login' exact component={Login} />
          <Route path='/create-account' exact component={CreateAccount} />
          <Route path='/play' exact component={Game} />
          <Route path='/results' exact component={Results} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
