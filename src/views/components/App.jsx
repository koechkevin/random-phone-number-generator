import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import store from '../redux/store';
import Home from './Home';
import NavBar from './NavBar';
import '../styles/styles.scss';

const history = createBrowserHistory();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <NavBar />
      <Home />
    </Router>
  </Provider>
);
export default App;
