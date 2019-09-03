import React, { Component } from 'react'
import Header from '../components/Home/header'


class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Header'
    }
  }

  render() {
    return (
      <div>
        <Header message={this.state.message}></Header>
        test
      </div>
    )
  }
}

export default Home