export default [
  {
    path:'/emptyBox',
    component: () => import(/* webpackChunkName: "home" */ '@/views/emptyBox/main.vue')
  },
]
