import Vue from 'vue';
import {Icon} from '@iconify/vue2';
import App from '../src/App.vue';
import Drawer from './components/Drawer.vue';
import router from "./router";
import Player from "./components/Player";
import {
    Area,
    Button,
    Cell,
    CellGroup,
    Circle,
    Lazyload,
    NoticeBar,
    Picker,
    Popup,
    Swipe,
    SwipeItem,
    Tab,
    Tabbar,
    TabbarItem,
    Tabs,
    Collapse, CollapseItem
} from 'vant';
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

Vue.component('VueSlider', VueSlider)
Vue.use(Swipe).use(SwipeItem).use(Button).use(Popup).use(Area).use(Cell).use(CellGroup).use(Circle).use(Lazyload).use(Picker).use(Tabbar).use(TabbarItem).use(Tab).use(Tabs).use(Collapse).use(CollapseItem).use(NoticeBar);
Vue.component('Icon', Icon);
Vue.component('Drawer',Drawer);
Vue.use(Player);



const app = new Vue({
  el: '#app',
  router,
  lazyComponent: true,
  components:{App},
  template:'<App/>',
});

