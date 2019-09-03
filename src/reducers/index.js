import {
    combineReducers
} from 'redux'
import todos from './todo'

const reducer = {
    todos
}

export default combineReducers({
    ...reducer
})