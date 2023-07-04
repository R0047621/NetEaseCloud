import indexView from '../views/index.vue';
import HomeView from '../views/HomeView/HomeView.vue';
import Search from '../views/Search/Search.vue'
import Genre from '../views/Genre/Genre.vue'
import Singer from '../views/Singer/Singer.vue'
import Zone from '../views/Zone/Zone.vue'
export default [
    //路径重定向 如果是/默认是IndexView页面
    {
        path:'/',
        redirect:'/HomeView',
    },
    {
        path:"/IndexView",//地址栏跳转的路径
        component:indexView //组件路径
    },
    {
        path:"/HomeView",
        component:HomeView
    },
    {
        path:"/Search",
        component:Search
    },
    {
        path:"/Genre",
        component:Genre
    },
    {
        path:"/Singer",
        component:Singer
    },
    {
        path:"/Zone",
        component:Zone
    },
    {
        path: "/Foo",
        //懒加载组件
        component: () => import('../views/Foo.vue')
    },
    {
        path: '/SingingListDetails:id',
        component: () => import('../views/SingingListDetails/SingingListDetails.vue')
    }
]