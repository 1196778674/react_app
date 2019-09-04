export const addTodo = text => ({
    type: 'ADD_TODO',
    text
})

// thunk
export const thunkTodo = function (num) {
    return dispatch => {
        setTimeout(() => {
            dispatch(addTodo(num))
        }, 2000);
    }
}
