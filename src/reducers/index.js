import { combineReducers } from 'redux'
import appState from './todo'

const reducer = {
    appState
}

export default combineReducers({
    ...reducer
})