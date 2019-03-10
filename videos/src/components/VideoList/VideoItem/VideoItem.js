import React, { Component } from 'react';

import './VideoItem.css';

export default class VideoItem extends Component {
  render() {
    const video = this.props.video;

    return (
      <div className="video-item item" onClick={() => this.props.onVideoSelect(this.props.video)}>
        <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}
