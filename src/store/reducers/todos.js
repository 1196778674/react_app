const todos = (state = [], action) => {
    console.log(state.id)
    switch (action.type) {
        case 'ADD_TODO':
            return state.id + 1
            // break;
    
        default:
            // break;
    }
}

export default todos