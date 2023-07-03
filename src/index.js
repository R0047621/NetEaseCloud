import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import App from '../src/App.vue';
import Drawer from './components/Drawer.vue';
import { Swipe, SwipeItem } from 'vant';
Vue.component('Icon', Icon);
Vue.component('Drawer',Drawer)
Vue.use(Swipe);
Vue.use(SwipeItem);
import router from "./router";
const vm = new Vue({
  el: '#app',
  router,
  components:{App},
  template:'<App/>',
});


