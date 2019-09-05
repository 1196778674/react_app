import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addTodo, thunkTodo } from '../actions'


const mapStateToProps = state => ({
  test: state.appState.test,
  geturl: state.appState.geturl
  })
  const mapDispatchToProps = dispatch => ({
    todo: num => dispatch(addTodo(num)),
    thunk: num => dispatch(thunkTodo()),
  })

class States extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            storeNum: 1,
            num: 1
        }
    }

    addStore(num) {
        //同步
        this.props.todo(num)
      }
      thunk(num){
        //异步
        this.props.thunk()
      }
      add (n) {
        this.setState({
          num: this.state.num+n
        })
      }

    render() {
        return (
            <div>
                <div>store的数据： { this.props.test } </div>
                <button onClick = { () => { this.addStore(this.state.storeNum) } } > store add </button> 
                <div>{this.props.geturl}</div>
                <button onClick = { () => { this.thunk() } } > 异步请求数据 </button> 
                <div>当前组件数据： {this.state.num}</div>
                <button onClick = { () => { this.add(this.state.storeNum) } } > state add </button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(States)