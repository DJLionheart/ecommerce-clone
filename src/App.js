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

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Route exact path="/" component={ Home }/>
          <Route path="/collections/:collectionPath" component={ Shop }/>
          <Route path="/pages/:galleryName" component={ Gallery }/>
          <Route path="/cart" component={ Cart }/>
          <Route path="/wishlist" component={ Wishlist }/>
          <Route path="/account" component={ Account }/>
          <Route path="/account/register" component={ Register }/>
          <Route path="/account/login" component={ Login }/>
          <Route path="/account/addresses" component={ Addresses }/>
          <Route path="/pages/biography" component={ Biography }/>
          <Route path="/pages/awards" component={ Awards }/>
          <Route path="/pages/media" component={ Media }/>
          <Route path="/pages/contact-us" component={ Contact }/>
          <Route path="/products/:productName" component={ ProductPage }/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
