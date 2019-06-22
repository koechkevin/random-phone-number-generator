import { mount } from 'enzyme/build';
import React from 'react';
import App from '../components/App';
import Generator from '../components/Generator';

describe('test', () => {
  it('passes', () => {
    expect(mount(<App />)).toMatchSnapshot();
    expect(mount(
      <Generator/>,
    )).toMatchSnapshot();
  });
});
