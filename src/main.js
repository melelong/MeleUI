import Vue from 'vue';
// import './style/index.css';
import './plugins/ml';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
