import actions from './actions';
import getters from './getters';
import mutations from './mutations';
const state = {
  products: [
    {
      id: 1,
      name: "suabsh",
      email: "suabsh@g.com",
      gender: "male",
      age: 3
    },
    {
      id: 1,
      name: "sharma",
      email: "sharma@g.com",
      gender: "male",
      age: 3
    },
    {
      id: 1,
      name: "ram",
      email: "ram@g.com",
      gender: "male",
      age: 3
    },
  ]
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
