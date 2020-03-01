export default [
  {
    path:'/button',
    component: () => import(/* webpackChunkName: "home" */ '@/views/button/main.vue')
  },
]
