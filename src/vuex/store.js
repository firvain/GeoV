import Vuex from 'vuex';
import Vue from 'vue';
import { INCREMENT } from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
  },
  mutations: {
    [INCREMENT](state) {
      state.count += 1; // eslint-disable-line
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

// export default store;
// if (module.hot) {
//   // accept actions and mutations as hot modules
//   module.hot.accept(['./mutations', './modules/a'], () => {
//     // require the updated modules
//     // have to add .default here due to babel 6 module output
//     const newMutations = require('./mutations').default;
//     const newModuleA = require('./modules/a').default;
//     // swap in the new actions and mutations
//     store.hotUpdate({
//       mutations: newMutations,
//       modules: {
//         a: newModuleA,
//       },
//     });
//   });
// };
