import { combineReducers } from 'redux';

const storeFromLocalStorage = process.env.NODE_ENV !== 'test' ? JSON.parse(localStorage.getItem('store')) : undefined;

export const initialState = storeFromLocalStorage || {
  recentlyCreated: [],
  error: {},
  generateError: '',
  allNumbers: [],
  pagination: {
    pageCount: 100,
    currentPage: 1,
    totalCount: 1100,
  },
};

export const generate = (state = initialState, action) => {
  let store = state;
  switch (action.type) {
    case 'GENERATE_SUCCESSFUL':
      action.callBack();
      store = { ...state, recentlyCreated: action.payload, generateError: '' };
      break;
    case 'GENERATE_FAILED':
      store = { ...state, error: action.error, generateError: 'error' };
      break;
    case 'GET_RECENT_SUCCESSFUL':
      store = { ...state, recentlyCreated: action.payload, generateError: '' };
      break;
    case 'GET_RECENT_FAILED':
      store = { ...state, error: action.error, generateError: '' };
      break;
    case 'GET_SUCCESSFUL':
      store = {
        ...state, allNumbers: action.payload, pagination: action.pagination, generateError: '',
      };
      break;
    case 'GET_FAILED':
      store = { ...state, error: action.error, generateError: '' };
      break;
    default:
      break;
  }
  localStorage.setItem('store', JSON.stringify(store));
  return store;
};

export default combineReducers({
  generate,
});
