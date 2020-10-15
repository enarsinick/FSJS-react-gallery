import React, { Component } from 'react';
import Photo from './Photo';

class PhotoContainer extends Component {

  render() {
    
    let results = this.props.data;
    let images = results.map(image => {
      return <Photo key={image.id} src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} />
    })

    return(
        <div className="photo-container">
            <h2>{this.props.title ? this.props.title : 'Results'}</h2>
            <ul>
                {images}
            </ul>
        </div>
    );
  }
}
export default PhotoContainer;