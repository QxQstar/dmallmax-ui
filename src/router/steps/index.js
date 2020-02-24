export default [
  {
    path:'/steps',
    component: () => import(/* webpackChunkName: "home" */ '@/views/steps/main.vue')
  },
]
