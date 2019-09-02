import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [1,2,3,4,5,6],
      items: ''
    }
    this.handlerChange = this.handlerChange.bind(this)
  }
  handlerChange () {
    this.setState({
      items: '123'
    })
  }
  componentWillMount() {
    let items = this.state.list.map((key) => {
      return <li className="" key={key}>{key}</li>
    })
    this.setState({
      items: items
    })
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }
  
  
  render() {
    return (
      <div>
        {this.state.items}
        <button onClick={this.handlerChange}>change</button>
      </div>
    )
  }
}

