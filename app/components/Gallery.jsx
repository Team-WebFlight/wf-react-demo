import React, { Component } from 'react';
import Webflight from '../../webflight/WebFlight.jsx'

class Gallery extends Component {
  render() {
    var images = [];
    for (let i = 0; i < this.props.imageSrc.length; i++) {
      images.push(<Webflight imgSrc={this.props.imageSrc[i]} key={i} />)
    } 
    return (
      <div>
       { images }
      </div>
    );
  }
}

export default Gallery;
