import React, { Component } from 'react'
import WebFlight from './WebFlight.jsx'
import Masonry from 'react-masonry-component'

class Gallery extends Component {
  render() {
    let images = this.props.source.map((img, i) => {
      return (
          <WebFlight source={img} key={i} />
        )
    })
   return (
    <div>
      <Masonry elementType={'ul'}>
        { images }
        </Masonry>
    </div>
    );
  }
}

export default Gallery;
