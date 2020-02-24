export default [
  {
    path:'/table',
    component: () => import(/* webpackChunkName: "home" */ '@/views/table/main.vue')
  },
]
