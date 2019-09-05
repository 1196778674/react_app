import React, { PureComponent } from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import Test from './Test'
import Home from './Home'

class ChangeRoute extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="margin-top">
                <div>子路由切换 : </div>
                <Link to="/home">Home</Link> | <Link to="/test">Test</Link>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/test" component={Test}/>
                </Switch>
            </div>
        )
    }
}

export default ChangeRoute