import { useState, useEffect } from 'react';
import './App.css';
import Nav from './Components/Nav';
import PageOne from './Components/PageOne';
import Pagetwo from './Components/Pagetwo';
import Timer from './Components/Timer';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import StickyNote from './Components/StickyNote';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pageone" component={PageOne} />
          <Route path="/pagetwo" component={Pagetwo} />
          <Route path="/timer" component={Timer} />
          {/* <Route path="/placeholder/:id" render={ routerProps => 
            <StickyNote {...routerProps} />
          } />
          <Route path="/placeholder" component={StickyNote} /> */}
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => (
  <div>
    <h1>Feeling stuck?</h1>
    <h2>This is an app designed to help you when you are unmotivated, unorganized, or just a little uninspired.</h2>
    <p>Check out the <Link to="/pageone">sticky note</Link> wall where you can post whatever ideas, thoughts, or general reminders you need to spill out of your head.</p>
    <p>If you've completely lost your creative spark, these <Link to="/pagetwo">randomly generated facts</Link> might help ignite some dormant parts of your brain.</p>
    <p>Do you work better under pressure? Skip right to the chase and set a <Link to="/timer">timer</Link> for yourself to force yourself into a productive groove.</p>
  </div>
);

export default App;