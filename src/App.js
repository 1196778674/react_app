import React, { PureComponent } from 'react'

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      message: props.test
    }
  }

  render() {
    return (
      <div>
      {this.state.message}
      </div>
    )
  }
}

export default App