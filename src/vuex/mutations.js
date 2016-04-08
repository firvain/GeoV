import { INCREMENT } from './mutation-types';
/* eslint-disable */
export default {
  [INCREMENT](state, amount) {
    state.count++;
    state.history.push('increment');
  },
};
