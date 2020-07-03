export default [
  {
    path:'/tableList',
    component: () => import(/* webpackChunkName: "home" */ '@/views/tableList/main.vue')
  },
]
