import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import "./i18n";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter basename="/demo/plus/react/template/demo_2/preview">
    <App />
  </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();