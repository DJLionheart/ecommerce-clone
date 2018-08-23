import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Routes from './Routes';

import './assets/styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      workOpen: false,
      galleriesOpen: false,
      artistOpen: false,
      shopOpen: false,
      searchOpen: false,
      menuOpen: false,
      atTheTop: true
    }
    this.openWork = this.openWork.bind(this);
    this.openGalleries = this.openGalleries.bind(this);
    this.openArtist = this.openArtist.bind(this);
    this.openShop = this.openShop.bind(this);
    this.openSearch = this.openSearch.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
}

componentDidMount() {
  document.addEventListener('scroll', ()=> {
    const atTheTop = window.scrollY < 101;
    if(atTheTop !== this.state.atTheTop) {
      this.setState({
        atTheTop
      })
    }
  })
}

openWork() {
    this.setState({
        workOpen: true,
        searchOpen: false,        
        galleriesOpen: false,
        artistOpen: false,
        shopOpen: false,
        menuOpen: false
    })
}

openGalleries() {
    this.setState({
        galleriesOpen: true,
        searchOpen: false,
        workOpen: false,
        artistOpen: false,
        shopOpen: false,
        menuOpen: false
    })
}

openArtist() {
    this.setState({
        artistOpen: true,
        searchOpen: false,
        galleriesOpen: false,
        workOpen: false,
        shopOpen: false,
        menuOpen: false
    })
}

openShop() {
    this.setState({
        shopOpen: true,
        searchOpen: false,
        galleriesOpen: false,
        artistOpen: false,
        workOpen: false,
        menuOpen: false
    })
}

openSearch() {
    this.setState({
        searchOpen: true,
        menuOpen: false,
        shopOpen: false,
        galleriesOpen: false,
        artistOpen: false,
        workOpen: false
    })
}

openMenu() {
    this.setState({
        menuOpen: true,
        searchOpen: false,
        shopOpen: false,
        galleriesOpen: false,
        artistOpen: false,
        workOpen: false
    })
}

closeDropdown() {
    this.setState({
        workOpen: false,
        searchOpen: false,
        galleriesOpen: false,
        artistOpen: false,
        shopOpen: false,
        menuOpen: false
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
            openSearch={ this.openSearch }
            openMenu={ this.openMenu }
            closeDropdown={ this.closeDropdown }
            state={ this.state }
          />
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Routes closeDropdown={ this.closeDropdown }/>
        </div>
      </Router>
    );
  }
}

export default App;
