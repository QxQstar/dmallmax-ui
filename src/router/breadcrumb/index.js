export default [
  {
    path:'/breadcrumb',
    component: () => import(/* webpackChunkName: "home" */ '@/views/breadcrumb/main.vue')
  },
]
