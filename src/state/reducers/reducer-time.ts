import { SET_TIME } from '../constants';
import { setTimeType } from '../actions/actions';

const initialState: number = 0;

export function timeReducer(state = initialState, action: setTimeType): number {
  switch (action.type) {
    case SET_TIME:
      return action.payload;
    default:
      return state;
  }
}