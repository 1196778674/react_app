export const addTodo = text => ({
    type: 'ADD_TODO',
    text
})

// thunk
export const thunkTodo = (num) => dispatch => {
        setTimeout(() => {
            dispatch(addTodo(num))
        }, 1000);
}