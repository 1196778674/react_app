let id = 0;
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: id++,
    text
})