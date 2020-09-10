import { combineReducers } from 'redux';
import { formReducer } from './reducer-form';
import { timeReducer } from './reducer-time';
import { mapReducer } from './reducer-map';

export const rootReducer = combineReducers({
  time: timeReducer,
  form: formReducer,
  coord: mapReducer,
});

type rootReducerFunc = typeof rootReducer;
export type AppState = ReturnType<rootReducerFunc>;