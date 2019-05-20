import router from './router'
import store from './store'
import { Message } from 'element-ui'

//进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//获取从cookie中token值
import { getToken } from '@/utils/auth'

//进度条配置
NProgress.configure({
    showSpinner: false
})

//禁止重定向白名单
const whiteList = ['/login']

//调用钩子函数
router.beforeEach(async(to, from, next) => {
    NProgress.start()

    //决定用户是否已经登录
    const hasToken = getToken()

    if (hasToken) {
        console.log(to.path)
        if (to.path === '/login') {
            //如果已经登录，则重定向到登录之后的主页面
            next({ path: '/' })
            NProgress.done()
        } else {
            //通过用户信息来判断是否获取相应的权限角色
            const hasRoles = store.getters.roles && store.getters.roles.length > 0
            console.log(store.getters)
            if (hasRoles) {
                next()
            } else {
                try {
                    //获取用户信息
                    //角色必须是一个对象数组，比如： ['amdin'] 或者 ['developer', 'editor']
                    const { roles } = await store.dispatch('user/getInfo')

                    //根据用户角色生成可访问的路由表
                    const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

                    //动态添加可访问路由
                    router.addRoutes(accessRoutes)
                  // hack method to ensure that addRoutes is complete
                  // set the replace: true, so the navigation will not leave a history record                    
                    next({...to, replace: true })
                } catch (error) {
                    await store.dispatch('user/resetToken')
                    Message.error(error || 'has Error')
                    next(`/login?redirect=${to.path}`)
                    NProgress.done()
                }
            }
        }
    } else {
        //没有token的情况
        if (whiteList.indexOf(to.path) !== -1) {
            //匹配到了
            next()
        } else {
            //没有权限访问的其他页面，重定向到登录页面
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }

})

router.afterEach(() => {
    NProgress.done()
})