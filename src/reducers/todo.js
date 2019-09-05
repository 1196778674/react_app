const initState = {
    test: 1,
    geturl: '点击得到链接'
}
const appState = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {test: state.test + action.text})
        case 'SET_NAME':
            return Object.assign({}, state, {geturl: action.text})
            default:
                return state
    }
}
export default appState