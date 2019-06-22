import { mount } from 'enzyme/build';
import React from 'react';
import Generator from '../components/Generator';

describe('test', () => {
  const wrapper = mount(
    <Generator/>,
  );
  it('passes', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('simulates submit', () => {
    const form = wrapper.find('form');
    expect(form.length).toEqual(1);
    form.simulate('submit', {
      target: {
        preventDefault: jest.fn(),
      },
    });
    expect(wrapper.state()).toBe(null);
  });
});
