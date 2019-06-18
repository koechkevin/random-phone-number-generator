import rootReducer from './redux/reducers'
import store from './redux/store'
import App from './components/App';
import { mount } from 'enzyme';
import React from "react";

describe('test', () => {
  it('passes', () => {
    const wrapper = mount(
      <App />
    )
  })
});
