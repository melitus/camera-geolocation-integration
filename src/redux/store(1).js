import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { ReduxObservable } from './utils';
import initialState from './initialState';
import reducers from './rootReducers';
import rootEpic from './rootEpic';

const middlewares = [
  ReduxObservable.createEpicMiddleware(rootEpic),
];

const store = createStore(reducers, initialState, composeWithDevTools(
  applyMiddleware(...middlewares),
));

export default store;
