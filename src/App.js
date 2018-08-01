import React, { Component } from 'react';
import './assets/styles/App.css';
import NavBar from './components/NavBar/NavBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
          <h1>Hello World!</h1>
      </div>
    );
  }
}

export default App;
