import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const bindMiddleware = middlewares => {
  if (process.env.NODE_ENV === 'development') {
    /* eslint-disable global-require */
    // const { logger } = require(`redux-logger`);
    // middlewares.push(logger);
    const { composeWithDevTools } = require('redux-devtools-extension')
    /* eslint-enable global-require */
    return composeWithDevTools(applyMiddleware(...middlewares))
  }
  return applyMiddleware(...middlewares)
}

export const initStore = (initialState = {}) => {
  const reducers = combineReducers({});

  const rootReducer = (state, action) => {
    /* let newState = state;
    if (action.type === LOGOUT_SUCCESS) {
      newState = undefined;
      return reducers(newState, action);
    } */
    return reducers(state, action);
  }

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, initialState, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};
