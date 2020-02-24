export default [
  {
    path:'/radio',
    component: () => import(/* webpackChunkName: "home" */ '@/views/radio/main.vue')
  },
]
