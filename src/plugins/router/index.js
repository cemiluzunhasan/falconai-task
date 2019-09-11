import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Dashboard/Views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
