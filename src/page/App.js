import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'

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
      <StateCom />
      <ChangeRoute />
      </div>
    )
  }
}

export default App