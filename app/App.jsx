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
      bottom: 6,
      current: this.srcArray.slice(0, 6)
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll(e) {
    let srollTop = e.srcElement.body.scrollTop;
    console.log('scroll top', srollTop)
  }

  render () {
    return (
    <div>
      <Gallery source={this.state.current} scroll={this.handleScroll} />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
