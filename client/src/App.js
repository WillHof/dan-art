import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home"
import Paintings from './components/Paintings'
import About from "./components/About"
class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Paintings" component={Paintings} />
          <Route exact path="/About" component={About} />
        </Switch>
      </Router>
    );
  }
}


export default App;
