import React, { Component } from 'react'

class PureComp extends Component {
  render() {
    console.log("Pure Component Render");
    return (
      <div>
        I am the PureComponent.
        {this.props.name}

      </div>
    )
  }
}

export default PureComp