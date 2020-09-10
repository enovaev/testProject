import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import store from './state/store/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Normalize />
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
