import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'babel-polyfill';
import MutationObserver from 'mutation-observer';

global.MutationObserver = MutationObserver;
document.getSelection = jest.fn();

global.describe = (message, test) => describe(message, test);
global.it = (message, test) => it(message, test);
global.expect = assertion => expect(assertion);

const mock = (function () {
  let store = {};
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
  };
}());

Object.defineProperty(window, 'localStorage', {
  value: mock,
});
// global.MutationObserver = () => {};
configure({ adapter: new Adapter() });
