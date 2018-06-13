import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './locale';

Vue.config.productionTip = false;

Vue.use(iView);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')