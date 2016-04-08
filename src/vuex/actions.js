import * as types from './mutation-types';
export const incrementCounter = function incrementCounter({ dispatch }, x) {
  dispatch(types.INCREMENT, x);
};
