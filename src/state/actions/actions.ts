import { SET_TIME, SET_FORM, SET_LOCATION } from '../constants';
import { formType } from '../types';


export type setTimeType = {
  type: typeof SET_TIME,
  payload: number,
}

export const setTIME = (): setTimeType => ({
  type: SET_TIME,
  payload: Date.now(),
});

export interface IForm<T> {
  name: T,
  surname: T,
  age: T,
  education:  T,
  about: T,
}

export type setFormType = {
  type: typeof SET_FORM,
  payload: IForm<formType>,
}

export const setForm = (form: IForm<formType>): setFormType => ({
  type: SET_FORM,
  payload: form,
});

export type setLocationType = {
  type: typeof SET_LOCATION,
  payload: number[],
}

export const setLocation = (loc: number[]): setLocationType => ({
  type: SET_LOCATION,
  payload: loc,
});