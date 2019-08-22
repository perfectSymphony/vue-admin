import Layout from '@/layout'

const tableRouter = {
    path: '/table',
    component: Layout,
    // redirect: '/table/complex-table',
    name: 'Table',
    meta: {
        title: 'Table',
        icon: 'table'
    },
    children: [
        {
            path: 'dynamic-table',
            component: () => import('@/views/table/dynamic-table/index'),
            name: 'DynamicTable',
            meta: {
                title: 'dynamicTable'
            }
        },
        {
            path: 'drag-table',
            component: () => import('@/views/table/drag-table'),
            name: 'DragTable',
            meta: {
                title: 'dragTable'
            }
        },
        {
            path: 'table-inline-edit',
            component: () => import('@/views/table/table-inline-edit'),
            name: 'tableInlineEdit',
            meta: {
                title: 'tableInlineEdit'
            }
        },
        {
            path: 'complex-table',
            component: () => import('@/views/table/complex-table'),
            name: 'complexTbale',
            meta: {
                title: 'complexTable'
            }
        }
    ]
}

export default tableRouter