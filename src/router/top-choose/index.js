export default [
  {
    path:'/topChoose',
    component: () => import(/* webpackChunkName: "home" */ '@/views/topChoose/main.vue')
  },
]
