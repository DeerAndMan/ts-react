import loadable from '@loadable/component'
import Index from '../views/Index'
// import FirstViews from '../views/FirstViews'

interface router {
    path:string,
    name:string,
    component:any,
    redirect?: string
    children?:Array<router>
}

const routers:Array<router> = [
    {
        path: '/',
        name: '首页',
        component: Index,
        // 重定向
        // redirect: '/firstViews'
        
    },
    {
        path: '/firstViews',
        name: '第一页',
        component: loadable(() => import('@/views/FirstViews'))
    },
    {
        path: '/tableResizable',
        name: '表格',
        component: loadable(() => import('@common/TableResize')),
    },
    {
        path: '/dynamicRouter',
        name: '路由',
        component: loadable(() => import('@/views/DynamicRouter')),
        children: [
            {
                path: '/dynamicRouter/link1',
                name: 'link1',
                component: loadable(() => import('@/views/Api')),
                children: [
                    {
                        path: '/dynamicRouter/link1/testTable',
                        name: 'link1Test',
                        component: loadable(() => import('@common/TableResize')),
                    }
                ]
            },
            {
                path: '/dynamicRouter/link2',
                name: 'link2',
                component: loadable(() => import('@/views/Api'))
            }
        ]
    },
    {
        path: '/jsApi',
        name: 'JS 基础API',
        component: loadable(() => import('@/views/Api'))
    },
    {
        path: '/aboutTs',
        name: 'aboutTs',
        component: loadable(() => import('@/views/AboutTs'))
    },
    {
        path: '/error',
        name: '错误',
        component: loadable(() => import('@components/Error'))
    }
]

export default routers
