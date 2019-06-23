import { mount } from 'enzyme';
import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NavBar from '../NavBar';
import Home from '../Home';
import App from '../App';
import Generator from '../Generator';
import { initialState } from '../../redux/reducers';
import {
  RecentlyGenerated, SideNav, Table, TableRow,
} from '../index';

const store = configureStore([thunk])({ generate: initialState });

describe('Navbar test', () => {
  const wrapper = mount(<NavBar/>);
  it('mounts appropriately', () => {
    expect(wrapper.find('.nav-bar').length).toEqual(1);
  });
});

describe('App test', () => {
  const wrapper = mount(<App />);
  it('mounts appropriately', () => {
    expect(wrapper.find('.home-body').length).toEqual(1);
  });
});

describe('Generator test', () => {
  const props = {
    action: jest.fn(),
    getAllNumbers: jest.fn(),
  };
  const wrapper = mount(<Generator {...props}/>);
  it('mounts without crashing', () => {
    expect(wrapper.find('.generator').length).toEqual(1);
  });

  it('handles change', () => {
    const input = wrapper.find('input[type="number"]');
    expect(input.length).toEqual(1);
    input.simulate('change', { target: { value: 6 } });
    expect(wrapper.state().number).toEqual(6);
  });

  it('handles form submit', () => {
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: jest.fn() });
    expect(props.action).toHaveBeenCalled();
  });
});

describe('test Home', () => {
  const props = {
    generate: jest.fn(), getRecent: jest.fn(), getAllNumbers: jest.fn(),
  };
  const wrapper = mount(
    <Provider store={store}>
      <Home {...props}/>
    </Provider>,
  );
  it('finds pagination component and simulates change page', () => {
    const next = wrapper.find('.next');
    next.simulate('click');
    wrapper.find('.previous').simulate('click');
    expect(next.length).toEqual(1);
  });

  it('finds sort buttons', () => {
    const descending = wrapper.find('.desc');
    const recent = wrapper.find('.rec');
    const id = wrapper.find('.id');
    const mobile = wrapper.find('.mob');
    descending.simulate('click');
    recent.simulate('click');
    id.simulate('click');
    mobile.simulate('click');
    descending.simulate('click');
    const buttons = descending.length + recent.length + id.length + mobile.length;
    expect(buttons).toEqual(4);
  });
});

describe('mounts all children', () => {
  it('mounts recently generated contact', () => {
    const recent = mount(<RecentlyGenerated each={{ mobile: 123456789 }}/>);
    expect(recent.find('.recently-created').length).toEqual(1);
  });
  it('mounts recently generated contact', () => {
    const sideNav = mount(<SideNav recentlyCreated={[{ mobile: 123456789 }]}/>);
    expect(sideNav.find('.side-nav').length).toEqual(1);
    expect(sideNav.find('.recently-created').length).toEqual(1);
  });
});

describe('it renders table', () => {
  const props = {
    numbers: [
      {
        id: 1,
        mobile: 38475758785,
        createdAt: '2019-06-22T19:36:31.394Z',
        recently_generated: 3,
      },
    ],
    changePage: jest.fn(),
    pagination: initialState.pagination,
  };
  const wrapper = mount(<Table {...props}/>);
  expect(wrapper.find('.table-row').length).toEqual(1);
});
