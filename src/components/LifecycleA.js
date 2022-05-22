import React, { Component } from "react";
import LifeCycleB from "./LifecycleB";

export class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sakil",
    };
    console.log("LifecycleA constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedMethod");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleA componenetDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponenetUpdate");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("LifecycleA getSnapShotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifecycleA componenetdidUpdate ");
  }
  changeState = () => {
    this.setState({
      name: "Md Sakiluzzaman",
    });
  };

  render() {
    console.log("lifeCycelA render");
    return (
      <div>
        <div>LifeCycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB></LifeCycleB>
      </div>
    );
  }
}

export default LifecycleA;
