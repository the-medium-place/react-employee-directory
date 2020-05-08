import React, { Component } from 'react';
import ListContainer from './components/ListContainer';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid banner">
          <div className="container">
            <h1 className="display-4">Employee Manager</h1>
            <p className="lead">Below is a list of employees. Search by any property using the search field. Sort by Name or Location by clicking on the corresponding icons.</p>
          </div>
        </div>
        <ListContainer />
      </div>
    );
  }
}

export default App;
