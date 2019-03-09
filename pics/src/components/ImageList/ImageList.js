import React, { Component } from 'react';
import './ImageList.css';

class ImageList extends Component {
  render() {
    const content = this.props.images.map(({ id, alt_description, urls }) => {
      return <img key={id} alt={alt_description} src={urls.regular} />;
    });

    return <div className="image-list">{content}</div>;
  }
}

export default ImageList;
