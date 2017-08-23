import React, { Component } from 'react';
import moment from 'moment';

import earthquakes from '../data/earthquakes.js'

class EarthquakeList extends Component {

  render() {

    fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson").then((response) => {
      console.log(response.json());
    })

    let quakes = earthquakes.features.map((quake) => {
      return (
        <div className="col-sm-6" key={quake.id}>
          <div className="card" >
            <div className="card-block">
              <h4 className="card-title">{quake.properties.title}</h4>
              <h6 className="card-subtitle mb-2 text-muted">Magnitude: {quake.properties.mag}</h6>
              <h6 className="card-subtitle mb-2 text-muted">Time: {moment(quake.properties.time).format('llll')}</h6>
              <p className="card-text">Coordinates: {quake.geometry.coordinates.join(', ')}</p>

              <a href={quake.properties.url} className="card-link">USGS Event Link</a>

            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="quake-list">

        <div className="row">
          {quakes}
        </div>

      </div>
  )}

}

export default EarthquakeList;
