import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'
import Home from '../components/Home'
class List extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div><Home/><Link to="/index">欢迎来到react</Link></div>
        )
    }
}

export default List