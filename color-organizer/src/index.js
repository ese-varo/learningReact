import React from 'react';
import { ColorProvider } from './color-hooks.js';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
