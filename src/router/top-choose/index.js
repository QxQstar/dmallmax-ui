export default [
  {
    path:'/topChoose',
    component: () => import(/* webpackChunkName: "home" */ '@/views/top-choose/main.vue')
  },
]
