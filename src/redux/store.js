import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// We use this style in case we want to use other middlewares in our store
const middlewares = [logger];

// If not we can remove the above and just do just do applyMiddleware(logger)
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;