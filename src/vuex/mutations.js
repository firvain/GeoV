import { SHOWSNACKBAR, HIDESNACKBAR } from './mutation-types';

/* eslint-disable */
export default {
    [SHOWSNACKBAR](state, obj) {
      state.snackbar = true; // eslint-disable-line
      state.snackbarMsg = obj.message; // eslint-disable-line
    },
    [HIDESNACKBAR](state) {
      state.snackbar = false; // eslint-disable-line
    },
};
