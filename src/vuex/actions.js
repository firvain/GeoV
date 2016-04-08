import * as types from './mutation-types';
export const incrementCounter = function incrementCounter({ dispatch }, x) {
  dispatch(types.INCREMENT, x);
};
export const showSnackbar = function showSnackbar({ dispatch }, msg) {
  dispatch(types.SHOWSNACKBAR, msg);
};
export const hideSnackbar = function hideSnackbar({ dispatch }) {
  dispatch(types.SHOWSNACKBAR);
};
