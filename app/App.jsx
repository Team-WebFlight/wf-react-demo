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
      total: 4,
      current: this.srcArray.slice(0, 4)
    }
  }
  render () {
    console.log('total ', this.state.current)
    return (
    <div>
      <Gallery source={this.state.current} />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
