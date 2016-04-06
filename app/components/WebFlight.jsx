import React, { Component } from 'react'
import path from 'path'

class WebFlight extends Component {
  constructor () {
    super()
    this.replaceSrc = function (src) {
      if (wfGlobal[path.basename(src)]) {
        this.wfSrc = wfGlobal[path.basename(src)]
      } else {
        this.wfSrc = src
      }
    }.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    this.replaceSrc(nextProps.source)
  }

  componentWillMount () {
    this.replaceSrc(this.props.source)
  }

  render () {
    return (
      <li>
        <img src={this.wfSrc} className={'display'}/>
      </li>
    )
  }
}

export default WebFlight
