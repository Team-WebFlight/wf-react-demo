import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Gallery from './components/Gallery.jsx'
import WebFlight from './components/WebFlight.jsx'
import path from 'path'
import { sources } from './utils/img-src.js'
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
    return (
    <div>
      <div>
        <button id='reds' onClick={this.triggerRed}>Reds</button>
        <button id='yellows' onClick={this.triggerYellow}>Yellows</button>
      </div>
      <WebFlight source={this.state.display} cls={"display"}/>
      <Gallery source={this.state.current}
               handle={this.updateDisplay} cls={"thumbnails"}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
