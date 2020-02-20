export default [
  {
    name:'login',
    path:'/account/login',
    meta:{
      fullPage:true,// 是否全屏
      noAuth:true // 不需要登录
    },
    component: () => import(/* webpackChunkName: "account" */ '@/views/account/login.vue')
  },
  {
    name:'modifyPw',
    path:'/account/modifyPw',
    meta:{
      fullPage:true,// 是否全屏
      noAuth:true
    },
    component: () => import(/* webpackChunkName: "account" */ '@/views/account/modifyPw.vue')
  }
]
