export default [
  {
    path:'/tableList',
    component: () => import(/* webpackChunkName: "home" */ '@/views/table-list/main.vue')
  },
]
