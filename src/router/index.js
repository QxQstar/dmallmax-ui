import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/main.vue'

Vue.use(Router);

const routes = {
  layoutRoutes:[],
  fullRoutes:[],
  // 根据路由配置将路由对应的页面分为全屏页面和 layout 页面
  classifyRoute(route) {
    if(route.meta && route.meta.fullPage) {
      routes.fullRoutes.push(route)
    } else {
      routes.layoutRoutes.push(route)
    }
  },
  // 是否是合法的路径，以项目名开头的路径才算是合法的路径
  isValidPath(path) {
    return path === '/' || path.startsWith('/'+process.env.VUE_APP_PROJECT_NAME)
  },
  getValidPath(path) {
    if(routes.isValidPath(path)) return path
    else return `/${process.env.VUE_APP_PROJECT_NAME}${path}`
  },
  // 让所有路由的 path 都以 /项目名 开头
  formatRoute(route) {
    if(route.path[0] === '/' && !routes.isValidPath(route.path)) {
      route.path = routes.getValidPath(route.path)
    }

    if(route.children && route.children.length) {
      route.children = route.children.map(routes.formatRoute)
    }
    return route
  },
  // 确保通配符路由放在最后
  sortRoute(fullRoutes){
    return fullRoutes.sort((a,b) => {
      if(a.path === '*') return 1
      else if(b.path === '*') return -1
      else return 0
    });
  }
}

// 得到各个模块定义的路由配置
const routeContext = require.context('./',true,/index\.js$/);
routeContext.keys().forEach(key => {
  // 如果是 router 根目录的 index.js 不做处理
  if(key.startsWith('./index')) {
    return
  }
  const routeModule = routeContext(key).default || [];
  if(Array.isArray(routeModule)) {
    routeModule.forEach(routes.classifyRoute)
  } else {
    routes.classifyRoute(routeModule);
  }
});

const createRouter = () => new Router({
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes:[
    {
      path:'/',
      component:Layout,
      children:routes.layoutRoutes.map( routes.formatRoute )
    },
    // 无顶部导航和左侧导航的页面
    ...routes.sortRoute( routes.fullRoutes.map( routes.formatRoute ) )
  ]
});

const router = createRouter();

// 路由守卫
router.beforeEach(async (to,from,next) => {
  if(!routes.isValidPath(to.fullPath)) {
    next({
      path:routes.getValidPath(to.fullPath),
      replace:true
    })
  } else {
    next();
  }
});

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRoute() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher // reset router
}
export { routes }
export default router;
