import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logicMiddleware from './logics.config';
import reducers from '../reducers';

const middlewares = [logicMiddleware];

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
