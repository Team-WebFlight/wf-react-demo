import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Photos from './components/Photos.jsx'
import WebFlight from './components/WebFlight.jsx'
import path from 'path'
import { sources } from './utils/img-sources.js'
import Gallery from 'react-photo-gallery'


class App extends Component {
  constructor() {
    super();
    this.srcArray = sources.slice(0, 4)

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
    console.log('sourc ', this.state.current)
    return (
    <div>
      <Photos photos={this.state.current} />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
