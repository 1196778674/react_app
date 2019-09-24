import { ADD_TODO, SET_NAME } from './actionType'
import testApi from '../api/testApi'
export const addTodo = text => ({
    type: ADD_TODO,
    text
})

// thunk
export const thunkTodo = () => dispatch => {
    asyncGet(dispatch);
}
// 异步请求
const asyncGet = (dispatch) => {
    testApi.testGet().then(res => {
        dispatch(setName(res.articles[0].url))
    })
}

export const setName = text => ({
    type: SET_NAME,
    text
})

