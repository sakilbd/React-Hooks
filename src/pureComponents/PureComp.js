import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
      console.log('Pure Componenet Render')
    return (
      <div>Pure Componenet : {this.props.name}</div>
    )
  }
}

export default PureComp