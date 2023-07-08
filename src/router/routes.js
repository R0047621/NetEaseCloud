import indexView from '../views/index.vue';

export default [
    //路径重定向 如果是/默认是IndexView页面
    {
        path:'/',
        redirect:'/Information',
    },
    {
        path:"/IndexView",//地址栏跳转的路径
        component:indexView //组件路径
    },
    {
        path:"/HomeView",
        component:()=>import('../views/HomeView/HomeView.vue')
    },
    {
        path:"/Search",
        component:()=>import('../views/Search/Search.vue')
    },
    {
        path:"/Genre",
        component:()=>import('../views/Genre/Genre.vue')
    },
    {
        path:"/Singer",
        component:()=>import('../views/Singer/Singer.vue')
    },
    {
        path:"/Zone",
        component:()=>import('../views/Zone/Zone.vue')
    },
    {
        path: "/Foo",
        //懒加载组件
        component: () => import('../views/Foo.vue')
    },
    {
        path: '/SingingListDetails:id',
        component: () => import('../views/SingingListDetails/SingingListDetails.vue')
    },
    {
        path: '/Login',
        component: () => import('../views/Login/Login.vue')
    },
    {
        path: '/JSX',
        component: () => import('../views/JSX')
    },
    {
        path: '/Information',
        component: () => import('../views/Information/Information')
    },
]