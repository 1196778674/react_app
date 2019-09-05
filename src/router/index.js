// 子路由页面
import Index from '../page/Index'
import Home from '../components/Home'
import Test from '../components/Test'
// 列表页
import List from '../page/List'
import State from '../page/State'
// 路由配置
const routes = [
    {
        path: '/index',
        component: Index,
        routes: [
            {
                path: '/home',
                component: Home
            },
            {
                path: '/test',
                component: Test
            }
        ]
    },
    {
        path: '/',
        component: List
    },
    {
        path: '/state',
        component: State
    }
]

export default routes