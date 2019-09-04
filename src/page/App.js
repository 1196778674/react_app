
import React, { Component } from 'react'
import { connect } from 'react-redux';


let mapStateToProps
let mapDispatchToProps
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      test: this.props.id
    }
  }
  mapStateToProps = state => ({
    id: state.id
  });
  mapDispatchToProps = (dispatch, ownProps) => {
    return {
      show_state: () => {
        dispatch('ADD_TODO')
      }
    }
  }
  
  show_state () {
    this.setState({
      test: this.state.test+1
    })
    console.log('store: ', this.props)
  }

  render() {
    return (
      <div>
      {this.state.test}
      
        <button onClick={() => this.show_state()}>show</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)