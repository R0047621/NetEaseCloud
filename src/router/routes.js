import indexView from '../views/index.vue';

export default [
    //路径重定向 如果是/默认是IndexView页面
    {
        path: '/',
        component: () => import(/*webpackChunkName:' root'*/'../views/HomeView/HomeView.vue')
    },
    {
        path: "/IndexView",//地址栏跳转的路径
        component: indexView //组件路径
    },
    {
        path: "/HomeView",
        component: () => import('../views/HomeView/HomeView.vue')
    },
    {
        path: "/Search",
        component: () => import('../views/Search/Search.vue')
    },
    {
        path: "/Genre",
        component: () => import('../views/Genre/Genre.vue')
    },
    {
        path: "/Singer",
        component: () => import('../views/Singer/Singer.vue')
    },
    {
        path: "/Zone",
        component: () => import('../views/Zone/Zone.vue')
    },
    {
        path: "/Foo",
        //懒加载组件
        component: () => import('../views/示例/Foo.vue')
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
        component: () => import('../views/示例/JSX')
    },
    {
        path: '/Information',
        component: () => import('../views/Information/Information')
    },
    {
        path: '/feta-0708',
        component: () => import('../views/示例/feta-0708.vue')
    },
    {
        path: '/edit',
        component: () => import('../views/Information/edit')
    },
    {
        path: '/Player',
        component: () => import('../components/Player/Player.vue')
    },
    {
        path: '/PlayerHome',
        component: () => import('../views/PlayerHome.vue')
    },
    {
        path: '/Mv',
        component: () => import('../views/Mv/Mv.jsx')
    },
    {
        path:'/videoPlayerView/:id',
        component:()=>import('../views/Mv/videoPlayerView.vue')
    },
    // 子路由组件渲染在父路由组件的router-view中
    {
        name:'0713',
        path: '/0713/:uid',
        meta:{show:false},
        components: {
            nav:() => import(/*webpackChunkName: '0713'*/'../views/示例/Feat-0723.vue'),
            top:() => import(/*webpackChunkName: '0713'*/'../views/示例/Feat-0723.vue'),
        },
        children:[
            {
                path:"a",
                name:"0713_a",
                component:{
                    template:`<div>0713的子路由A</div>`
                }
            },
            {
                path:"b",
                name:"0713_b",
                component:{
                    template:`<div>0713的子路由B</div>`
                }
            }
        ]
    }
]