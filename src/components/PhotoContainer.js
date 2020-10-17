import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

class PhotoContainer extends Component {

  render() {
    
    let results = this.props.data;
    let images;

    // If the loading is true, then render a loading paragraph to the DOM
    if(this.props.loading) {
      images = <p className="not-found">Loading....</p>
    } else {
      // If the results passed to props are not empty, then create photo components with data and add to DOM
      if (results.length > 0) {
        images = results.map(image => {
          return <Photo key={image.id} src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} />
        })
      } else {
        // If the results passed to props are empty, display a Not Found componenet
        images = <NotFound />
      }
    }

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