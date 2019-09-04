import React, {
  PureComponent
} from 'react'
import {
  connect
} from 'react-redux'
import {
  addTodo
} from './actions'

const mapStateToProps = state => ({
  todos: state.todos.test
})
const mapDispatchToProps = dispatch => ({
  todo: id => dispatch(addTodo(id))
})

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {}
  }
  add(t) {
    this.props.todo(t)
  }

  render() {
    return ( < div > {
        this.props.todos
      } < button onClick = {
        () => {
          this.add(2)
        }
      } > button < /button> < /div >
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)