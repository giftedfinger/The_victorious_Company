import React, { Component } from 'react';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '400px',
    };

    // 8.7339625,8.8370758

    const officeLocation = { lat:8.8370758, lng:  8.7339625};

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={officeLocation}
      >
        <Marker position={officeLocation} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'pk.eyJ1IjoiZ2lmdGVkZmluZ2VycyIsImEiOiJjbGg5N2R6MHowMW5qM2VvMjJoY281c3VpIn0.kgVCJflimXbW-l3FJJberw',
})(MapContainer);
