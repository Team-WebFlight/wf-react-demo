import React, { Component } from 'react';
import Webflight from '../../webflight/WebFlight.jsx'

class Gallery extends Component {
  //constructor() {
  //  super();
  //  this.state = {
  //    birdSrcs: ['imgs/blue1.jpg','imgs/blue2.jpg', 
  //    'imgs/blue3.jpg', 'imgs/blue4.jpg'],
  //    displayBird: this.birdSrcs[0]
  //  }
  //}

  //componentWillReceiveProps(nextProps) {
  //  this.wfProps = wfReplace(nextProps);
  //}

  //componentWillMount() {
  //  this.wfProps = wfReplace(this.props);
  //}
  //// this.wfProps.[propName]
  render() {
    var images = [];
    for (let i = 0; i < this.props.imageSrc.length; i++) {
      images.push(<Webflight imgSrc={this.props.imageSrc[i]} key={i} />)
    } 
    console.log('images is ', images)
    return (
      <div>
       { images }
      </div>
    );
  }
}

export default Gallery;
