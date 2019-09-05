import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'

class List extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div><Link to="/index">首页</Link></div>
        )
    }
}

export default List