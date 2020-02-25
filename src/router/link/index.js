export default [
  {
    path:'/link',
    component: () => import(/* webpackChunkName: "home" */ '@/views/link/main.vue')
  },
]
