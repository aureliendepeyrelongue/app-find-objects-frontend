export const state = () => ({
  firstName: "",
  lastName: "",
  email: ""
});

export const mutations = {
  setFirstName(state, firstName) {
    state.firstName = firstName;
  },
  setLastName(state, lastName) {
    state.lastName = lastName;
  },
  setEmail(state, email) {
    state.email = email;
  }
};
