import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { initialState } from '../reducers';
import { generateAction, getAllNumbers, recentlyGeneratedAction } from '../actions';


describe('test actions', () => {
  const store = configureStore([thunk])({ generate: initialState });
  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('generates random number', async (done) => {
    moxios.stubRequest('/api/generate', {
      response: {
        status: 200,
        data: {
          numbers: [],
        },
      },
    });
    await store.dispatch(generateAction(10, jest.fn(), jest.fn()));
    expect(store.getActions()[0].type).toEqual('GENERATE_SUCCESSFUL');
    done();
  });

  it('generates random number', async (done) => {
    moxios.stubRequest('/api/recently-generated', {
      response: {
        status: 200,
        data: {
          recentlyGenerated: [],
        },
      },
    });
    await store.dispatch(recentlyGeneratedAction());
    expect(store.getActions()[0].type).toEqual('GET_RECENT_SUCCESSFUL');
    done();
  });
  it('generates random number', async (done) => {
    moxios.stubRequest('/api/generate', {
      response: {
        status: 400,
      },
    });
    await store.dispatch(generateAction(10));
    expect(store.getActions()[0].type).toEqual('GENERATE_FAILED');
    done();
  });

  it('generates random number', async (done) => {
    moxios.stubRequest('/api/recently-generated', {
      status: 400,
    });
    await store.dispatch(recentlyGeneratedAction());
    expect(store.getActions()[0].type).toEqual('GET_RECENT_FAILED');
    done();
  });

  it('generates random number', async (done) => {
    moxios.stubRequest('/api/numbers', {
      status: 400,
    });
    await store.dispatch(getAllNumbers(''));
    expect(store.getActions()[0].type).toEqual('GET_FAILED');
    done();
  });
  it('generates random number', async (done) => {
    moxios.stubRequest('/api/numbers', {
      response: {
        status: 200,
        data: {
          numbers: [],
          pagination: initialState.pagination,
        },
      },
    });
    await store.dispatch(getAllNumbers(''));
    expect(store.getActions()[0].type).toEqual('GET_SUCCESSFUL');
    done();
  });
});
