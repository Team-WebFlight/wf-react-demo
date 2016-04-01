import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Gallery from './components/Gallery.jsx'

import path from 'path'

class App extends Component {
  constructor() {
    super();
    this.state = {
      birdSrcs: ['imgs/blue-1.jpg','imgs/blue-2.jpg', 
      'imgs/blue-3.jpg', 'imgs/blue-4.jpg']
    }
  }
  render () {
    console.log('rendering bird')
    return (
    <div>
     <Gallery imageSrc={this.state.birdSrcs} />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
