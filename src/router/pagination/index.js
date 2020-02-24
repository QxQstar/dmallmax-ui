export default [
  {
    path:'/pagination',
    component: () => import(/* webpackChunkName: "home" */ '@/views/pagination/main.vue')
  },
]
