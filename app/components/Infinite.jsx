//import React, { Component } from 'react';
import WebFlight from '../../webflight/WebFlight.jsx'
import Infinite from 'react-infinite'


class Infinite extends Component {
  render() {
    let images = this.props.imgSrc.map((img, i) => 
      <WebFlight source={img} key={i} />)
    return (
      <div>
       { images }
      </div>
    );
  }
}

export default Infinite;
