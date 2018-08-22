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
import Contact from './components/pages/Contact/Contact'
import ProductPage from './components/Shop/ProductPage/ProductPage';
import Footer from './components/Footer/Footer';
import Account from './components/user/Account/Account';
import Addresses from './components/user/Addresses/Addresses';
import Wishlist from './components/user/Wishlist/Wishlist';
import Register from './components/user/Register/Register';
import Login from './components/user/Login/Login';

import './assets/styles/App.css';
import Routes from './Routes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      workOpen: false,
      galleriesOpen: false,
      artistOpen: false,
      shopOpen: false,
      menuOpen: false
    }
    this.openWork = this.openWork.bind(this);
    this.openGalleries = this.openGalleries.bind(this);
    this.openArtist = this.openArtist.bind(this);
    this.openShop = this.openShop.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.closePopup = this.closePopup.bind(this);
} 

openWork() {
    this.setState({
        workOpen: true,
        galleriesOpen: false,
        artistOpen: false,
        shopOpen: false,
        menuOpen: false
    })
}

openGalleries() {
    this.setState({
        galleriesOpen: true,
        workOpen: false,
        artistOpen: false,
        shopOpen: false,
        menuOpen: false
    })
}

openArtist() {
    this.setState({
        artistOpen: true,
        galleriesOpen: false,
        workOpen: false,
        shopOpen: false,
        menuOpen: false
    })
}

openShop() {
    this.setState({
        shopOpen: true,
        galleriesOpen: false,
        artistOpen: false,
        workOpen: false,
        menuOpen: false
    })
}

openMenu() {
    this.setState({
        menuOpen: true,
        shopOpen: false,
        galleriesOpen: false,
        artistOpen: false,
        workOpen: false
    })
}

closePopup() {
    this.setState({
        workOpen: false,
        galleriesOpen: false,
        artistOpen: false,
        shopOpen: false
    })
}

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar
            openWork={ this.openWork }
            openGalleries={ this.openGalleries }
            openArtist={ this.openArtist }
            openShop={ this.openShop }
            openMenu={ this.openMenu }
            closePopup={ this.closePopup }
            state={ this.state }
          />
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Routes closePopup={ this.closePopup }/>
        </div>
      </Router>
    );
  }
}

export default App;
