import React, { Component } from 'react';

class ImageList extends Component {
  render() {
    const content = this.props.images.map(({ id, alt_description, urls }) => {
      return <img key={id} alt={alt_description} src={urls.regular} />;
    });

    return <div>{content}</div>;
  }
}

export default ImageList;
