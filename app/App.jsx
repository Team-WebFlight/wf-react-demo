import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import WebFlight from './components/WebFlight.jsx'
import path from 'path'
import { sources } from './utils/img-sources.js'
import Gallery from './components/Gallery.jsx'


class App extends Component {
  constructor() {
    super();
    this.srcArray = sources

    this.state = {
      current: this.srcArray
    }

    //this.triggerRed = function () {
    // return this.setState({current: this.srcArray[1]})
    //}.bind(this)

    //this.triggerYellow = function () {
    //  return this.setState({current: this.srcArray[2]})
    //}.bind(this)

    //this.updateDisplay = function (element) {
    //  let clickedSrc = `imgs/${path.basename(element.target.src)}`
    //  return this.setState({display: clickedSrc})
    //}.bind(this)

  }
  render () {
    return (
    <div>
      <Gallery source={this.state.current} />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
