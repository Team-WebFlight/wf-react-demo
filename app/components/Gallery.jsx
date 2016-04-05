import React, { Component } from 'react';
import WebFlight from './WebFlight.jsx'
import Masonry from 'react-masonry-component'

class Gallery extends Component {
  render() {
    let images = this.props.source.map((img, i) => {
      return (
          <WebFlight source={img} key={i} cls={this.props.cls} 
          handle={this.props.handle} />
        )
    })
    console.log('images ', images)
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
