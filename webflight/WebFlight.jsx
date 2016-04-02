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
  }

  componentWillReceiveProps (nextProps) {
    this.replaceSrc(nextProps.source)
  }

  componentWillMount () {
    // NOTE: Standard error: 'src' is missing in props validation for WebFlight

    this.replaceSrc(this.props.source)
  }

  render () {
    console.log('this.props', this.props)
    return (
    <div>
      <img src={this.props.source} className={this.props.c} />
    </div>
    )
  }
}

export default WebFlight
