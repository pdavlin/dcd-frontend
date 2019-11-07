import React, { Component } from 'react';
import MapWrapper from './components/MapWrapper';
import { Header } from './components/Header';
import { ThemeProvider } from 'emotion-theming';
import { appTheme } from './components/AppTheme';

class App extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <ThemeProvider theme={appTheme} >
        <div style={{ height: '100vh', width: '100%' }}>
          <Header />
          <MapWrapper />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;