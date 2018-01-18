import Vue from 'vue';
import axios from 'axios'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import Vuetify from 'vuetify';
Vue.use(Vuetify);

import store from './store'

Vue.use(VueRouter);

import App from './components/App.vue';
import Dashboard from './components/Dashboard.vue';
import Order from './components/Order.vue';
import Profile from './components/Profile.vue';
import Setting from './components/Setting.vue';
import Signin from './components/Signin.vue';
import AddCategory from './components/AddCategory.vue';
import AddProduct from './components/AddProduct.vue'
import ProductList from './components/ProductList.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Dashboard},
    {path: '/order', component: Order},
    {path: '/profile', component: Profile},
    {path: '/setting', component: Setting},
    {path: '/signin', component: Signin},
    {path:'/addcategory', component:AddCategory},
    {path:'/addproduct',component:AddProduct},
    {path:'/productlist',component:ProductList},
    {path:'/dashboard',component:Dashboard}
  ]
});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
