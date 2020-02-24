export default [
  {
    path:'/input',
    component: () => import(/* webpackChunkName: "home" */ '@/views/input/main.vue')
  },
]
