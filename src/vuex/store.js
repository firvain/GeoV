import Vuex from 'vuex';
import Vue from 'vue';
import { SHOWSNACKBAR, HIDESNACKBAR } from './mutation-types';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 1,
    snackbar: false,
    snackbarMsg: '',
  },
  mutations: {
    // [INCREMENT](state) {
    //   state.count += 1; // eslint-disable-line
    // },
    [SHOWSNACKBAR](state, msg) {
      state.snackbar = true; // eslint-disable-line
      state.snackbarMsg = msg; // eslint-disable-line
    },
    [HIDESNACKBAR](state) {
      state.snackbar = false; // eslint-disable-line
    },
  },
});
// /* eslint-disable */
// if (module.hot) {
//   module.hot.accept(['./mutations'], () => {
//     const newMutations = require('./mutations').default;
//     console.log(newMutations);
//     store.hotUpdate({
//       newMutations,
//     });
//   });
// }

export default store;

