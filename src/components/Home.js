import React, { PureComponent, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const mapStoreProps = (store) => {
    return {
        test: store.appState.test
    }
}

const mapStoreDispatch = (dispatch) => {
    return {
        todo: num => dispatch(addTodo(num))
    }
}

const Home = (props) => {
    const [state, setState] = useState(props)
    useEffect(() => {
        state.test > 1 && props.todo(1)
        return () => {
            
        };
    }, [state.test]);
    return (
        <div>
            Home
            <p>{state.test}</p>
            <button onClick={() => setState({...state, test: state.test + 1})}>setState</button>
            <p>{props.test}</p>
            <button onClick={() => props.todo(1)}>setStore</button>
        </div>
    )
}

export default connect(mapStoreProps, mapStoreDispatch)(Home)