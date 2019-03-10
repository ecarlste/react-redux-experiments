import React, { Component } from 'react';

export default class VideoDetail extends Component {
  render() {
    const video = this.props.video;

    if (!video) {
      return <div>No video selected...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
      <div>
        <div className="ui embed">
          <iframe src={videoSrc} title="Video Player" />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
}
