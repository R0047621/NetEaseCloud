import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import App from '../src/App.vue';
import Drawer from './components/Drawer.vue';
import { Swipe, SwipeItem } from 'vant';
import router from "./router";
import { NoticeBar } from 'vant';
Vue.use(NoticeBar);
Vue.component('Icon', Icon);
Vue.component('Drawer',Drawer)
Vue.use(Swipe);
Vue.use(SwipeItem);



const app = new Vue({
  el: '#app',
  router,
  components:{App},
  template:'<App/>',
});

