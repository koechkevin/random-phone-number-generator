import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import store from '../redux/store';
// import '../styles/styles.scss'

const history = createBrowserHistory();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      This is an app
    </Router>
  </Provider>
);
export default App;
