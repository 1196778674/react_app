// App入口
import App from '../page/App'
import Home from '../components/Home'
import Test from '../components/Test'

import List from '../page/List'
import State from '../page/State'
// 路由配置
const routes = [
    {
        path: '/index',
        component: App,
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
        path: '/list',
        component: List
    },
    {
        path: '/state',
        component: State
    }
]

export default routes