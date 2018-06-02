import {createStore, applyMiddleware, compose} from 'redux';
// import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

// const loggerMiddlewware = createLogger({ predicate: (getState, action) => __DEV__ });
const middleware = [thunk];

const initialState = {};
// const enhancer = compose(
//   applyMiddleware(...middleware),
// )

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
);

export default store;
