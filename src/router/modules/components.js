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
    },
    {
      path: 'json-editor',
      component: () => import('@/views/components-demo/json-editor'),
      name: 'JsonEditorDemo',
      meta: {
        title: 'JsonEditor'
      }
    },
    {
      path: 'split-pane',
      component: () => import('@/views/components-demo/split-pane'),
      name: 'Splitpane',
      meta: {
        title: 'Splitpane'
      }
    },
    {
      path: 'avatar-upload',
      component: () => import('@/views/components-demo/avatar-upload'),
      name: 'AvatarUploadDemo',
      meta: {
        title: 'avatarUpload'
      }
    },
    {
      path: 'dropzone',
      component: () => import('@/views/components-demo/dropzone'),
      name: 'DropZoneDemo',
      meta: {
        title: 'Dropzone'
      }
    },
    {
      path: 'Sticky',
      component: () => import('@/views/components-demo/sticky'),
      name: 'Sticky',
      meta: {
        title: 'Sticky'
      }
    },
    {
      path: 'count-to',
      component: () => import('@/views/components-demo/count-to'),
      name: 'countTo',
      meta: {
        title: 'count-to'
      }
    },
    {
      path: 'mixin',
      component: () => import('@/views/components-demo/mixin'),
      name: 'ComponentMixinDemo',
      meta: {
        title: 'componentMixin'
      }
    },
    {
      path: 'back-to-top',
      component: () => import('@/views/components-demo/back-to-top'),
      name: 'back-to-top',
      meta: {
        title: 'backToTop'
      }
    },
    {
      path: 'drag-dialog',
      component: () => import('@/views/components-demo/drag-dialog'),
      name: 'drag-dialog',
      meta: {
        title: 'dragDialog'
      }
    },
    {
      path: 'drag-select',
      component: () => import('@/views/components-demo/drag-select'),
      name: 'drag-select',
      meta: {
        title: 'dragSelect'
      }
    },
    {
      path: 'dnd-list',
      component: () => import('@/views/components-demo/dnd-list'),
      name: 'dnd-list',
      meta: {
        title: 'dndList'
      }
    },
    {
      path: 'drag-panel',
      component: () => import('@/views/components-demo/drag-panel'),
      name: 'drag-panel',
      meta: {
        title: 'dragKanban'
      }
    }
  ]
}

export default componentsRouter
