import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import App from '../src/App.vue';
import Drawer from './components/Drawer.vue';
import router from "./router";
import { Swipe, SwipeItem,Button,NoticeBar,Popup,Area, Cell, CellGroup, Circle,Lazyload,Picker   } from 'vant';

Vue.use(NoticeBar).use(Swipe).use(SwipeItem).use(Button).use(Popup).use(Area).use(Cell).use(CellGroup).use(Circle).use(Lazyload).use(Picker);
Vue.component('Icon', Icon);
Vue.component('Drawer',Drawer)




const app = new Vue({
  el: '#app',
  router,
  lazyComponent: true,
  components:{App},
  template:'<App/>',
});

