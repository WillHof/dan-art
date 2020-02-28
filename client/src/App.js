import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from "./components/Pages/Home"
import Paintings from './components/Pages/Paintings'
import About from "./components/Pages/About"
import Contact from "./components/Pages/Contact"
import Writing from "./components/Pages/Writing"
class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Paintings} />
          <Route exact path="/Paintings" component={Paintings} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Writing" component={Writing} />
        </Switch>
      </Router>
    );
  }
}


export default App;
