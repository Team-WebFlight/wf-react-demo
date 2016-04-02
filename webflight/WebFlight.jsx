import React, { Component } from 'react'
import path from 'path'

class WebFlight extends Component {
  constructor () {
    super()
    this.replaceSrc = function (src) {
      if (wfGlobal[path.basename(src)]) {
        this.wfSrc = wfGlobal[path.basename(src)]
        console.log('SUCCESSFUL RESET')
      } else {
        this.wfSrc = src
        console.log('UNSUCCESSFUL')
      }
    }
    this.handle = (e) => { console.log('clicked', e.target.src) }
  }

  componentWillReceiveProps (nextProps) {
    this.replaceSrc(nextProps.source)
  }

  componentWillMount () {
    this.replaceSrc(this.props.source)
  }

  render () {
    let newDisplay = this.props.source
    return (
    <div>
      <img src={this.props.source} className={this.props.cls} 
        onClick={this.props.handle} />
    </div>
    )
  }
}

export default WebFlight
