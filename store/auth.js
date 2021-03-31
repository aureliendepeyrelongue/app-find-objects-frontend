export const state = () => ({
  authenticated: false,
  token: ""
});

export const mutations = {
  authenticate(state, value) {
    state.authenticated = value;
  },
  setToken(state, token) {
    state.token = token;
  }
};
