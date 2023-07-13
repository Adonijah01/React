import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'
class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Adonijah"
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "Adonijah"
            })
        }, 3000 )
    }
  render() {
    console.log("Parent Component Render")
    return (
      <div>
        I am the ParentComponent.
        <RegularComp name={this.state.name}/>
        <PureComp  name={this.state.name}/>

      </div>
    )
  }
}

export default ParentComp