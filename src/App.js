import React, { Component } from 'react';
import ListContainer from './components/ListContainer';

import './App.css';

class App extends Component {
  render() {

    return (
      <div className="container">
        <div className="banner">
          <h1>Employee Manager</h1>
        </div>
        <ListContainer />
      </div>
    );
  }
}

export default App;
