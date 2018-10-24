import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Dashboard from './components/dashboard';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById('root')
)