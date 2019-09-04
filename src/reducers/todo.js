const initState = {
    test: 1
}
const appState = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                test: state.test + action.text
            }
            default:
                return state
    }
}
export default appState