import { useState, useEffect } from 'react';
import './App.css';
import Nav from './Nav';
import PageOne from './PageOne';
import Pagetwo from './Pagetwo';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pageone" component={PageOne} />
          <Route path="/pagetwo" component={Pagetwo} />
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;