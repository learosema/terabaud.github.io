import React, { Component } from "react"
import ReactDOM from "react-dom"

class MyApp extends Component {
  render() {
    return <h1>Hello Lea!</h1>
  }
}

ReactDOM.render(<MyApp />, document.getElementById("app"))