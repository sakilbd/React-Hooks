import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

 class ParentComp extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name:'Sakil'
       }
     }
     componentDidMount(){
         setInterval(() =>{
             this.setState({
                 name:'Sakil'
             })
         },2000)
     }
  render() {
      console.log('************Parent Component Render***************')
    return (
      <div>ParentComp
          {/* <RegularComp name={this.state.name}></RegularComp>
          <PureComp name={this.state.name}></PureComp> */}
          <MemoComp name={this.state.name}></MemoComp>
      </div>
    )
  }
}

export default ParentComp