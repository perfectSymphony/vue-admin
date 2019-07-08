import Layout from '@/layout'

const componentsRouter = {
    path: '/components',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ComponentDemo',
    meta: {
        title: 'components',
        icon: 'component'
    },
    children: [
        {
            path: 'tinymce',
            component: () => import('@/views/components-demo/tinymce'),
            name: 'TinymceDemo',
            meta: {
                title: 'tinymce'
            }
        },
        {
        path: 'markdown',
        component: () => import('@/views/components-demo/markdown'),
        name: 'MarkdownDemo',
        meta: {
            title: 'markdown'
        }
        }
    ]
}

export default componentsRouter