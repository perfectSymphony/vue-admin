import Layout from '@/layout'

const nestedRouter = {
  path: '/nested',
  component: Layout,
  // redirect: '/nested/menu1/menu1-1',
  name: 'Nested',
  meta: {
    title: 'nested',
    icon: 'nested'
  },
  children: [
    {
      path: 'menu1',
      component: () => import('@/views/nested/menu1/index'),
      name: 'Menu1',
      meta: {
        title: 'menu1'
      },
      // redirect: '/nested/menu1/menu1-1',
      children: [
        {
          path: 'menu1-1',
          component: () => import('@/views/nested/menu1/menu1-1'),
          name: 'Menu1-1',
          meta: {
            title: 'menu1-1'
          }
        },
        {
          path: 'menu1-2',
          component: () => import('@/views/nested/menu1/menu1-2'),
          name: 'Menu1-2',
          meta: {
            title: 'menu1-2'
          },
          children: [
            {
              path: 'menu1-2-1',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
              name: 'Menu1-2-1',
              meta: {
                title: 'menu1-2-1'
              }
            },
            {
              path: 'menu1-2-2',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
              name: 'Menu1-2-2',
              meta: {
                title: 'menu1-2-2'
              }
            }
          ]
        },
        {
          path: 'menu1-3',
          component: () => import('@/views/nested/menu1/menu1-3'),
          name: 'Menu1-3',
          meta: {
            title: 'menu1-3'
          }
        }
      ]
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
