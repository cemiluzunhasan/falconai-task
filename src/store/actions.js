import Proxy from '@/proxies';

export default {
  getData: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      commit('GLOBAL_REQUEST', payload);
      new Proxy().getData(payload).then(response => {
        commit('GLOBAL_SUCCESS', {key: payload.key, data: response.data});
        resolve();
      }).catch(error => {
        commit('GLOBAL_ERROR', { key: payload.key, error });
        reject(error);
      });
    })
  },
};