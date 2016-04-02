import React, { Component } from 'react';
import WebFlight from '../../webflight/WebFlight.jsx'

class Gallery extends Component {
  render() {
    let _class = 'thumbnails'
    let images = this.props.source.map((img, i) => 
      <WebFlight source={img} key={i} c={"thumbnails"} />)
    return (
      <div>
       { images }
      </div>
    );
  }
}

export default Gallery;
