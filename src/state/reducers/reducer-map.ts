import { SET_LOCATION } from '../constants';
import { setLocationType } from '../actions/actions';

const initialState: number[] = [55.45, 37.37];

export function mapReducer(state = initialState, action: setLocationType): number[] {
  switch (action.type) {
    case SET_LOCATION:
      return action.payload;
    default:
      return state;
  }
}