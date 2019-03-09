import React, { Component } from 'react';
import './ImageList.css';
import ImageCard from './ImageCard/ImageCard';

class ImageList extends Component {
  render() {
    const content = this.props.images.map(image => {
      return <ImageCard key={image.id} image={image} />;
    });

    return <div className="image-list">{content}</div>;
  }
}

export default ImageList;
