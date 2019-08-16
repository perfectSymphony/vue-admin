import Layout from '@/layout'

const nestedRouter = {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1/menu1-1',
    name: 'Nested',
    meta: {
        title: 'nested',
        icon: 'nested'
    },
    children: [
        {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/index'),
            name: 'Menu1',
            meta: {
                title: 'Menu1'
            }
        },
        {
            path: 'menu2',
            component: () => import('@/views/nested/menu2/index'),
            name: 'Menu2',
            meta: {
                title: 'menu2'
            }
        }
    ]
}

export default nestedRouter