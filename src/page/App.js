import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const mapStateToProps = state => ({
  appState: state.appState.test
})
const mapDispatchToProps = dispatch => ({
  todo: num => dispatch(addTodo(num))
})

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storeNum: 1,
      num: 1
    }
  }
  addStore(num) {
    this.props.todo(num)
  }
  add (n) {
    this.setState({
      num: this.state.num+n
    })
  }

  render() {
    return ( <div> 
      <div>store的数据： { this.props.appState } </div>
      <button onClick = { () => { this.addStore(this.state.storeNum) } } > store add </button> 
      <div>当前组件数据： {this.state.num}</div>
      <button onClick = { () => { this.add(this.state.storeNum) } } > state add </button> 
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)