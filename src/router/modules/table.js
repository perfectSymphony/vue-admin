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
        }
    ]
}

export default tableRouter