import { generate, initialState } from '../reducers';

describe('reducer', () => {
  it('handles state accordingly', () => {
    expect(generate(initialState, ({
      type: 'GENERATE_SUCCESSFUL', payload: {}, callBack: jest.fn(),
    }))).toEqual({ ...initialState, recentlyCreated: {} });
  });

  it('handles state accordingly', () => {
    expect(generate(initialState, ({
      type: 'GENERATE_FAILED', error: {},
    }))).toEqual({ ...initialState, generateError: 'error' });
  });

  it('handles state accordingly', () => {
    expect(generate(initialState, ({
      type: 'GET_RECENT_FAILED', error: {},
    }))).toEqual({ ...initialState });
  });

  it('handles state accordingly', () => {
    expect(generate(initialState, ({
      type: 'GET_FAILED', error: {},
    }))).toEqual({ ...initialState });
  });

  it('handles state accordingly', () => {
    expect(generate(initialState, ({
      type: 'GET_SUCCESSFUL', payload: [], pagination: initialState.pagination,
    }))).toEqual({ ...initialState });
  });

  it('handles state accordingly', () => {
    expect(generate(initialState, ({
      type: 'GET_RECENT_SUCCESSFUL', payload: [],
    }))).toEqual({ ...initialState });
  });
});
