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
    this.handleScroll = this.handleScroll.bind(this)
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  
  handleScroll(e) {
    let scrollTop = e.srcElement.body.scrollTop;
    let availHeight = window.screen.availHeight
    if (availHeight - scrollTop <= 150) {
      let currentSources = this.state.current
      let currentLastSource = this.state.bottom
      currentSources = currentSources.concat(this.srcArray.slice(currentLastSource, currentLastSource + 3))
      this.setState({current: currentSources, bottom: currentLastSource + 3})
    }
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
