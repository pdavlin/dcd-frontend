import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
// import { G_API_KEY } from './secrets/secrets';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    console.log(process.env);
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
          lat: 41.2701,
          lng: -96.0449
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_G_API_KEY
})(MapContainer);