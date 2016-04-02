import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Gallery from './components/Gallery.jsx'
import WebFlight from '../webflight/WebFlight.jsx'
import path from 'path'

class App extends Component {
  constructor() {
    super();
    this.srcArray = [['imgs/blue-1.jpg','imgs/blue-2.jpg', 
      'imgs/blue-3.jpg', 'imgs/blue-4.jpg'],
      ['imgs/02.jpg', 'imgs/10.jpg', 'imgs/11.jpg', 'imgs/12.jpg'],
      ['imgs/13.jpg', 'imgs/green-1.JPG','imgs/05.jpg', 'imgs/08.jpg']]

    this.state = {
      current: this.srcArray[0],
      display: this.srcArray[2][0]
    }

    this.triggerRed = function () {
     return this.setState({current: this.srcArray[1]})
    }.bind(this)

    this.triggerYellow = function () {
      return this.setState({current: this.srcArray[2]})
    }.bind(this)

  }
  render () {
    return (
    <div>
      <div>
        <button id='reds' onClick={this.triggerRed}>Reds</button>
        <button id='yellows' onClick={this.triggerYellow}>Yellows</button>
      </div>
      <Gallery source={this.state.current} />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
