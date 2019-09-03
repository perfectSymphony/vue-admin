import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// layout
import Layout from '@/layout'

// 路由模块
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import nestedRouter from './modules/nested'
import tableRouter from './modules/table'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

export const constantRoutes = [{
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [{
            path: '/redirect/:path*',
            component: () => import ('@/views/redirect/index')
        }]
    },
    {
        path: '/login',
        component: () => import ('@/views/login/index'),
        hidden: true
    },
    {
        path: '',
        component: Layout,
        redirect: 'dashboard',
        children: [{
            path: 'dashboard',
            component: () => import ('@/views/dashboard/index'),
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
        path: '/documentation',
        component: Layout,
        children: [{
            path: 'index',
            component: () => import ('@/views/documentation/index'),
            name: 'Documentation',
            meta: {
                title: 'documentation',
                icon: 'documentation',
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
        path: '/guide',
        component: Layout,
        redirect: '/guide/index',
        children: [{
            path: 'index',
            component: () => import('@/views/guide/index'),
            name: 'Guide',
            meta: {
                title: 'guide',
                icon: 'guide',
                noCache: true
            }
        }]
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
        alwaysShow: true,   //显示根菜单
        name: 'Permission',
        meta: {
            title: 'permission',
            icon: 'lock',
            roles: ['admin', 'editor']   //可以根导航设置角色
        },
        children: [{
            path: 'page',
            component: () => import('@/views/permission/page'),
            name: 'PagePermission',
            meta: {
                title: 'pagePermission',
                roles: ['admin']   // 你仅仅只能在子导航设置角色
            }
        },
        {
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
     * 
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
                },
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
        component:  Layout,
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
                name:'Page401',
                meta:{
                    title: 'page401',
                    noCache: true
                }
            },
            {
            path: '404',
            component: () => import('@/views/error-page/404'),
            name:'Page404',
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
                path: 'export-excel',
                component: () => import('@/views/excel/export-excel'),
                name: 'ExportExcel',
                meta: {
                    title: 'exportExcel'
                }
            },
            {
                path: 'export-selected-excel',
                component: () => import('@/views/excel/select-excel'),
                name: 'SelectExcel',
                meta: {
                    title: 'selectExcel'
                }
            },
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
    router.matcher = newRouter.matcher //重置路由
}

export default router