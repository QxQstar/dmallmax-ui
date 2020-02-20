export default [
  {
    path:'/404',
    meta:{
      fullPage:true, // 是否全屏，
      noAuth:true // 不需要登录
    },
    component: () => import(/* webpackChunkName: "404" */ '@/views/errorPages/404.vue')
  },
  {
    path:'/401',
    meta:{
      fullPage:true,
      noAuth:true // 不需要登录
    },
    component: () => import(/* webpackChunkName: "404" */ '@/views/errorPages/401.vue')
  },
  {
    path:'*',
    meta:{
      fullPage:true,
      noAuth:true // 不需要登录
    },
    component: () => import(/* webpackChunkName: "404" */ '@/views/errorPages/404.vue')
  }
]
