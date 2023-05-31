import React, { Component } from 'react'

export default class UpdateState extends Component {
    constructor(props) {
        super(props);
        this.state = {
          company: "webskitters",
          address: "salt lake kolkata",
          sine: "2010",
          
        };
      }

      change = () => {
        this.setState({sine: "now 2023"});
      }

  render() {
    return (
      <>
       <div>
        <h1>name company {this.state.company}</h1>
        <p>
          Address 
          { this.state.address}
          from {this.state.sine}.
        </p>
        <button
          type="button"
          onClick={this.change}
        >Update year</button>
      </div>
        
      </>
    )
  }
}