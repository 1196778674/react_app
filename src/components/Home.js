import React, { PureComponent, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const mapStateToProps = state => ({
    test: state.appState.test
})
const mapDispatchToProps = dispatch => ({
    todo: num => dispatch(addTodo(num))
})

const Home = (props) => {
    const [state, setState] = useState(props)
    useEffect(() => {
        console.log('state: ', props)
        return () => {
            
        };
    }, [props.test]);
    return (
        <div>
            Home
            <p>{state.test}</p>
            <button onClick={() => setState({...state, test: state.test + 1})}>setState</button>
            <p></p>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)