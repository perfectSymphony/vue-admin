import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: 'charts',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: {
        title: 'keyboardChart',
        nocache: true
      }
    },
    {
      path: 'line',
      component: () => import('@/views/charts/line'),
      name: 'LineChart',
      meta: {
        title: 'lineChart',
        nocache: true
      }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/charts/mix-chart'),
      name: 'mixChart',
      meta: {
        title: 'mixChart',
        nocache: true
      }
    }
  ]
}

export default chartsRouter
