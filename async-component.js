import React, { Component } from 'react'

export default (loadCom, placeholder = 'loading') => {
    return class AsyncComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                Child: null
            }
            this.unmount = false
        }
        componentWillMount() {
            this.unmount = true
        }
        async componentDidMount() {
            const {default: Child} = await loadCom()
            if(!this.unmount) return;
            this.setState({
                Child
            })
        }
        render() {
            const {Child} = this.state;
            return (
                Child ? <Child {...this.props} /> : placeholder
            )
        }
    }
}
