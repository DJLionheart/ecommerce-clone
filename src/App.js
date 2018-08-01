import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Gallery from './components/pages/Gallery/Gallery';
import Biography from './components/pages/Biography/Biography';
import Awards from './components/pages/Awards/Awards';
import Media from './components/pages/Media/Media';
import './assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Route exact path="/" component={ Home }/>
          <Route path="/collections/:collectionPath" component={ Shop }/>
          <Route path="/pages/:galleryName" component={ Gallery }/>
          <Route path="/cart" component={ Cart }/>
          <Route path="/pages/biography" component={ Biography }/>
          <Route path="/pages/awards" component={ Awards }/>
          <Route path="/pages/media" component={ Media }/>
        </div>
      </Router>
    );
  }
}

export default App;
