import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';
import Results from './pages/Results';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/play' exact component={Game} />
          <Route path='/results' exact component={Results} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
