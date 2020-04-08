import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  render() {
    const style = {
      height: '100vh'
    };

    const markerStyle = {
      width: '20px', height: '20px', backgroundColor: 'red', borderRadius: '50%'
    };

    let marker = null;
    let center = { lat: 48.856614, lng: 2.352222 };

    if (this.props.selectedFlat) {
      marker = <div
                style={markerStyle}
                lat={this.props.selectedFlat.lat}
                lng={this.props.selectedFlat.lng} />;
      center = { lat: this.props.selectedFlat.lat, lng: this.props.selectedFlat.lng };
    }

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

function mapReduxStateToProps(reduxState) {
  return { selectedFlat: reduxState.selectedFlat };
}

export default connect(mapReduxStateToProps)(Map);
