import React, { Component } from 'react'

 class RegularComp extends Component {
  render() {
      console.log('Regular Componenet Render')
    return (
      <div>Regular Componenet : {this.props.name}</div>
    )
  }
}

export default RegularComp