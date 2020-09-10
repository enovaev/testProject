import { SET_FORM } from '../constants';
import { IForm, setFormType } from "../actions/actions";
import { formType } from '../types';


const initialState: IForm<formType> = {
  name: '',
  surname: '',
  age: '',
  education: undefined,
  about: '',
};

export function formReducer(state = initialState, action: setFormType): IForm<formType> {
  switch (action.type) {
    case SET_FORM:
      return action.payload;
    default:
      return state;
  }
}