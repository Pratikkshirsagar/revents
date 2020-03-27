import { createStore } from 'redux';
import rootReducers from '../reducers/rootReducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

export const configureStore = () => {
  const store = createStore(rootReducers, devToolsEnhancer());

  return store;
};
