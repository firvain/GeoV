import Vuex from 'vuex';
import Vue from 'vue';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    snackbar: false,
    snackbarMsg: '',
  },
  mutations,
  strict: true,
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

