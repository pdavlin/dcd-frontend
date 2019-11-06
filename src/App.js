import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Header} from './shared/ui-components/Header';
  
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.2701,
      lng: -96.0449
    },
    zoom: 12
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <Header />
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_G_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;