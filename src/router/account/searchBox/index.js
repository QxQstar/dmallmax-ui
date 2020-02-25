export default [
  {
    path:'/searchBox',
    component: () => import(/* webpackChunkName: "home" */ '@/views/searchBox/main.vue')
  },
]
