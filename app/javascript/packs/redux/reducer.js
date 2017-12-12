import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';

export default function createReducer() {
  return combineReducers({
    form
  });
};