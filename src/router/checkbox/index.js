export default [
  {
    path:'/checkbox',
    component: () => import(/* webpackChunkName: "home" */ '@/views/checkbox/main.vue')
  },
]
