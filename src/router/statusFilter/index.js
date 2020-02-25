export default [
  {
    path:'/statusFilter',
    component: () => import(/* webpackChunkName: "home" */ '@/views/statusFilter/main.vue')
  },
]
