export default [
  {
    path:'/datePicker',
    component: () => import(/* webpackChunkName: "home" */ '@/views/datePicker/main.vue')
  },
]
