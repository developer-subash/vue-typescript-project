import getters from "./getters";

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
    }
  ]
};

export default {
  namespaced: true,
  state,
  getters
};
