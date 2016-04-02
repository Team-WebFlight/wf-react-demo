import React, { Component } from 'react';
import WebFlight from '../../webflight/WebFlight.jsx'

class Gallery extends Component {
  render() {
    let images = this.props.source.map((img, i) => 
      <WebFlight source={img} key={i} cls={this.props.cls} 
      handle={this.props.handle} />)
    return (
      <div>
       { images }
      </div>
    );
  }
}

export default Gallery;
