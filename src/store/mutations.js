export default {
  'GLOBAL_REQUEST': (state, payload) => {
    const { key } = payload;
    state[key] = { loading: true, data: null, error: null };
  },
  'GLOBAL_SUCCESS': (state, payload) => {
    const { key, data } = payload;
    state[key] = { loading: false, data, error: null };
  },
  'GLOBAL_ERROR': (state, payload) => {
    const { key, error } = payload;
    state[key] = { loading: false, data: null, error };
  },
};