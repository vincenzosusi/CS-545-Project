import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';
import Results from './pages/Results';
import CreateAccount from './pages/CreateAccount';
import {AuthProvider} from './Auth';

function App() {
  const [loginStatus, setLoginStatus] = useState(null);

  return (
    <AuthProvider>   
      <Router>
        <Link exact to="/create-account">Create Account</Link>
        <Link exact to="/login">Login</Link>

        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path='/create-account' exact component={CreateAccount} />
          <Route path='/play' exact component={Game} />
          <Route path='/results' exact component={Results} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
