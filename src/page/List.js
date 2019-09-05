import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'
import Home from '../components/Home'
import testApi from '../api/testApi'
class List extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: null
        }
    }
    
    UNSAFE_componentWillMount() {
        
    }

    GET_NAME() {
        testApi.testGet().then(res => {
            this.setState({
                name: res.articles[0].name
            })
        })
    }

    render() {
        return (
            <div>
            <Home/>
            <Link to="/index">欢迎来到react</Link>
            <p></p>
            <button onClick={() => this.GET_NAME()}>同步请求</button>
            <p></p>
            {this.state.name}
            </div>
        )
    }
}

export default List