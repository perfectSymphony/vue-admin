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
        }
    ]
}

export default componentsRouter