import React, { Component } from 'react';
import WebFlight from './WebFlight.jsx'

class Photos extends Component {
  render() {
    let images = this.props.photos.map((img, i) => 
      <WebFlight photos={img} key={i} cls={this.props.cls} 
      handle={this.props.handle} />)
    return (
      <div>
       { images }
      </div>
    );
  }
}

export default Photos;
