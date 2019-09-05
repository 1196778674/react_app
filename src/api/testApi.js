import server from '../api/server'

// 测试请求
const testApi = {
    testGet () {
        return server.get('api/v2/help_center/zh-cn/categories/360000082273/articles.json')
    }
}
export default testApi