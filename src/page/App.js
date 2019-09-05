import React, { Component } from 'react'
import {Link} from 'react-router-dom'

// 路由组件
import ChangeRoute from '../components/ChangeRoute'
import StateCom from './State'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }
  
  
  render() {
    return ( <div> 
        <div><Link to="/list">跳转到列表页</Link></div>
        <StateCom />
        <ChangeRoute />
      </div>
    )
  }
}

export default App