import React from 'react';
import MapWrapper from './components/MapWrapper';
import { Header } from './components/Header';
import { ThemeProvider } from 'emotion-theming';
import { appTheme } from './components/AppTheme';
import { AppContextProvider } from './components/AppContext';

const App = () => (
  <AppContextProvider>
    <ThemeProvider theme={appTheme} >
      <div style={{ height: '100vh', width: '100%' }}>
        <Header />
        <MapWrapper />
      </div>
    </ThemeProvider>
  </AppContextProvider>
);


export default App;