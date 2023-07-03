import VueRouter from "vue-router";
import Vue from "vue";
import routes from './routes.js'
Vue.use(VueRouter);
const router = new VueRouter({
    routes,
})
export default router

