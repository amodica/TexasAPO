import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './RouteSwitch';
import Navigation from './components/Navigation';
import Splash from './components/Splash';

import './styles/GlobalStyles.css';

// CSS file used for React-Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';

// Roboto font used with MUI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="top-level-container">
      <Splash/>
      <Navigation/>
      <div className="global-margins">
        <RouteSwitch/>
      </div>
    </div>
  </React.StrictMode>
);
