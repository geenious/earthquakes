import React, { Component } from 'react';
import '../styles/App.css';

import EarthquakeList from './EarthquakeList.js';
import EarthquakeInfo from './EarthquakeInfo.js';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="title">
          <h1 className="my-header">Earthquakes!</h1>
        </div>
        <EarthquakeInfo />
        <EarthquakeList />
      </div>
    );
  }
}

export default App;
