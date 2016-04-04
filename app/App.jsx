import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Gallery from './components/Gallery.jsx'
import WebFlight from './components/WebFlight.jsx'
import path from 'path'
import { sources } from './utils/img-sources.js'
import Infinite from 'react-infinite'

class App extends Component {
  constructor() {
    super();
    this.srcArray = sources

    this.state = {
      current: this.srcArray,
      display: this.srcArray[2][0]
    }

    this.triggerRed = function () {
     return this.setState({current: this.srcArray[1]})
    }.bind(this)

    this.triggerYellow = function () {
      return this.setState({current: this.srcArray[2]})
    }.bind(this)

    this.updateDisplay = function (element) {
      let clickedSrc = `imgs/${path.basename(element.target.src)}`
      return this.setState({display: clickedSrc})
    }.bind(this)

  }
  render () {
    console.log('sources ', this.srcArray)
    return (
    <div>
      <Infinite containerHeight={200} 
      elementHeight={600} imgSrc={this.srcArray} />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
