import React, { Component } from 'react';
import MapWrapper  from './shared/ui-components/MapWrapper';
import {Header} from './shared/ui-components/Header';
  
class SimpleMap extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <Header />
        <MapWrapper />
      </div>
    );
  }
}
 
export default SimpleMap;