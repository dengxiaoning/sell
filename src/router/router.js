import Vue from 'vue';
import VueRouter from 'vue-router';
import goods from '@/components/goods/goods';
import seller from '@/components/seller/seller';
import ratings from '@/components/ratings/ratings';
import App from '../App';

Vue.config.productionTip = false;
Vue.use(VueRouter);
// ***重点在这里是routes而不是routers，否则<router-view>标签是真的不会显示的***
// https://blog.csdn.net/u011215281/article/details/78642801
const routes = [
  { // default route path
    path: '/',
    component: App,
    redirect: '/goods'
  },
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/seller',
    component: seller
  },
  {
    path: '/ratings',
    component: ratings
  }
];

let router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

export default router;
