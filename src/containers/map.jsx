import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  render() {
    const style = {
      height: "100vh"
    };

    let marker = null;
    let center = { lat: 48.856614, lng: 2.352222 };

    return (
      <div className="map col-sm-4" style={style}>
        <GoogleMapReact
          center={center}
          defaultZoom={15}>
          {marker}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
