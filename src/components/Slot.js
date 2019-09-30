import React, { Component } from 'react'
import SlotCom from './SlotCom'
const Com = props => {
    return (
        <div>
            < SlotCom >
                < div style = {{color: "blue"}} > {
                    props.name
                } < /div>
            < /SlotCom>
        </div>
    )
}
export default Com