import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/Pages/Home"
import Paintings from './components/Pages/Paintings'
import About from "./components/Pages/About"
import Contact from "./components/Pages/Contact"
import InstallationViews from "./components/Pages/InstallationViews"
import Main from "./components/Pages/Main"
class App extends Component {

  render() {
    return (
      <Router>

        <Route exact path="/" component={Home} />
        <Route path="/Main">
          <Main>
            <Route exact path="/Main/Paintings" component={Paintings} />
            <Route exact path="/Main/About" component={About} />
            <Route exact path="/Main/Contact" component={Contact} />
            <Route exact path="/Main/InstallationViews" component={InstallationViews} />
          </Main>
        </Route>

      </Router>

    );
  }
}


export default App;
