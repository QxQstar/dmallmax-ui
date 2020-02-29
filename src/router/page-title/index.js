export default [
  {
    path:'/page-title',
    component: () => import(/* webpackChunkName: "home" */ '@/views/page-title/main.vue')
  },
]
