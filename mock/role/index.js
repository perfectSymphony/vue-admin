import Mock from 'mockjs'
import { deepClone } from '../../src/utils/index.js'
import { constantRoutes, asyncRoutes } from './routes.js';

const routes = deepClone([...constantRoutes, ...asyncRoutes])

const roles = [
    {
        key: 'admin',
        name: 'admin',
        description: 'Super Administrator. Have access to view all pages.',
        routes: routes
    },
    {
        key: 'editor',
        name: 'editor',
        description: 'Normal Editor. Can see all pages except permission page',
        routes: routes.filter(i => i.path !== '/permission') //
    },
    {
        key: 'visitor',
        name: 'visitor',
        description: 'Just a visitor. Can only see the home page and the document page',
        routes: [{
            path: '',
            redirect: 'dashboard',
            children: [{
                path: 'dashboard',
                name: 'dashboard',
                meta: {
                    title: 'dashboard',
                    icon: 'dashboard',
                }
            }]
        }]
    }
]

export default [
    // mock get all routes form server
    {
        url: '/routes',
        type: 'get',
        response: _ => {
            return {
                code: 20000,
                data: routes
            }
        }
    },
    // mock get all roles from server
    {
        url: '/roles',
        type: 'get',
        response: _ => {
            return {
                code: 20000,
                data: roles
            }
        }
    }
]