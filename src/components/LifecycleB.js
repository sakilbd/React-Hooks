import React, { Component } from 'react'

export class LifeCycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Sakil'
      }
      console.log('LifeCycleB constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedMethod')
        return null;
    }
    componentDidMount(){
        console.log('LifeCycleB componenetDidMount');
    }
    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponenetUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('LifecycleB getSnapShotBeforeUpdate')
        return null;

    }
    componentDidUpdate(){
        console.log('LifecycleB componenetdidUpdate ')
    }

  render() {
      console.log('lifeCycelB render')
    return (
      <div>
        LifeCycle B
      </div>
    )
  }
}

export default LifeCycleB
