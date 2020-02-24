export default [
  {
    path:'/select',
    component: () => import(/* webpackChunkName: "home" */ '@/views/select/main.vue')
  },
]
