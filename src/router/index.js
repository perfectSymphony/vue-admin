import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Layout from '@/layout'

// 路由模块
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import nestedRouter from './modules/nested'
import tableRouter from './modules/table'

/**
 * Note: sub-menu only appear when route children.length >= 1
 *
 * hidden: true                   当设置 true 的时候，该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1 (默认 false)
 * alwaysShow: true               当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect           当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'             设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * meta : {
    roles: ['admin','editor']    设置该路由进入的权限，支持多个权限叠加
    title: 'title'               设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'             设置该路由的图标
    noCache: true                如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    affix: true                  如果设置为true，打开的页面的标签则会固定在tags-view
    breadcrumb: false            如果设置为false，则不会在breadcrumb面包屑中显示
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes:
 * 没有任何权限要求的基础页面
 * 任何角色都可以访问
 */

export const constantRoutes = [{
  path: '/redirect',
  component: Layout,
  hidden: true,
  children: [{
    path: '/redirect/:path*',
    component: () => import('@/views/redirect/index')
  }]
},
{
  path: '/login',
  component: () => import('@/views/login/index'),
  hidden: true
},
{
  path: '',
  component: Layout,
  redirect: 'dashboard',
  children: [{
    path: 'dashboard',
    component: () => import('@/views/dashboard/index'),
    name: 'Dashboard',
    meta: {
      title: 'dashboard',
      icon: 'dashboard',
      onCache: true,
      affix: true
    }
  }]
},
{
  path: '/Technology-list',
  component: Layout,
  children: [{
    path: 'index',
    component: () => import('@/views/Technology-list/index'),
    name: 'Technology-list',
    meta: {
      title: 'TechnologyList',
      icon: 'Technology-list',
      affix: true
    }
  }]
},
{
  path: '/404',
  component: () => import('@/views/error-page/404'),
  hidden: true
},
{
  path: '/401',
  component: () => import('@/views/error-page/401'),
  hidden: true
},
{
  path: '/profile',
  component: Layout,
  redirect: '/profile/index',
  hidden: true,
  children: [{
    path: 'index',
    component: () => import('@/views/profile/index'),
    name: 'Profile',
    meta: {
      title: 'profile',
      icon: 'user',
      noCache: true
    }
  }]
}
]

/**
 * asyncRoutes
 * 根据用户角色动态加载路由
 */

export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // 显示根菜单
    name: 'Permission',
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // 可以根导航设置角色
    },
    children: [{
      path: 'directive',
      component: () => import('@/views/permission/directive'),
      name: 'DirectivePermission',
      meta: {
        title: 'directivePermission'
        // 如果不设置角色，意思是默认是： 这个页面不需要权限
      }
    },
    {
      path: 'role',
      component: () => import('@/views/permission/role'),
      name: 'RolePermission',
      meta: {
        title: 'rolePermission',
        roles: ['admin']
      }
    }
    ]
  },
  {
    path: '/icon',
    component: Layout,
    name: 'icon',
    children: [{
      path: 'index',
      component: () => import('@/views/icons/index'),
      name: 'Icons',
      meta: {
        title: 'icons',
        icon: 'icon',
        noCache: true
      }
    }]
  },
  /**
    * 当路由表太长的话， 可以拆分小的模块
    */
  componentsRouter,
  chartsRouter,
  nestedRouter,
  tableRouter,

  {
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: 'example',
      icon: 'example'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/example/create'),
        name: 'CreateArticle',
        meta: {
          title: 'createArticle',
          icon: 'edit'
        }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/example/edit'),
        name: 'EditAticle',
        meta: {
          title: 'editAticle',
          noCache: true,
          activeMenu: '/example/list'
        },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/example/list'),
        name: 'ArticleList',
        meta: {
          title: 'articleList',
          icon: 'list'
        }
      }
    ]
  },

  {
    path: '/tab',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/tab/index'),
        name: 'Tab',
        meta: {
          title: 'tab',
          icon: 'tab'
        }
      }
    ]
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: {
          title: 'page401',
          noCache: true
        }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: {
          title: 'page404',
          noCache: true
        }
      }]
  },
  {
    path: '/error-log',
    component: Layout,
    children: [
      {
        path: 'log',
        component: () => import('@/views/error-log/index'),
        name: 'ErrorLog',
        meta: {
          title: 'errorLog',
          icon: 'bug'
        }
      }
    ]
  },
  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/export-excel',
    name: 'Excel',
    meta: {
      title: 'excel',
      icon: 'excel'
    },
    children: [
      {
        path: 'export-merge-header',
        component: () => import('@/views/excel/merge-header'),
        name: 'MergeHeader',
        meta: {
          title: 'mergeHeader'
        }
      },
      {
        path: 'upload-excel',
        component: () => import('@/views/excel/upload-excel'),
        name: 'UploadExcel',
        meta: {
          title: 'uploadExcel'
        }
      }
    ]
  },
  {
    path: '/zip',
    component: Layout,
    meta: {
      title: 'zip',
      icon: 'zip'
    },
    children: [
      {
        path: 'download',
        component: () => import('@/views/zip/index'),
        name: 'ExportZip',
        meta: {
          title: 'ExportZip'
        }
      }
    ]
  },
  {
    path: '/pdf',
    component: Layout,
    children: [
      {
        path: 'printPDF',
        component: () => import('@/views/pdf/index'),
        name: 'PDF',
        meta: {
          title: 'printPDF',
          icon: 'pdf'
        }
      }
    ]
  },
  {
    path: '/pdf/download',
    component: () => import('@/views/pdf/download'),
    hidden: true
  },
  {
    path: '/theme',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/theme/index'),
        name: 'Theme',
        meta: {
          title: 'theme',
          icon: 'theme'
        }
      }
    ]
  },
  {
    path: '/clipboard',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/clipboard/index'),
        name: 'Clipboard',
        meta: {
          title: 'clipboard',
          icon: 'clipboard'
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history',
  routes: constantRoutes
})

const router = createRouter()

// https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // 重置路由
}

export default router
