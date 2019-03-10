import React, { Component } from 'react';

export default class VideoDetail extends Component {
  render() {
    const video = this.props.video;

    if (!video) {
      return <div>No video selected...</div>;
    }

    return <div>{video.snippet.title}</div>;
  }
}
