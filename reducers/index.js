import {combineReducers} from 'redux';
import * as types from '../actions/types';
import AppNavigationReducer from './appNavigationReducer';
import ResourcesReducer from './resourcesReducers';

export default combineReducers({
  AppNavigationReducer,
  ResourcesReducer,
});
