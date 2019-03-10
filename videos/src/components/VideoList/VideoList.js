import React, { Component } from 'react';
import VideoItem from './VideoItem/VideoItem';

export default class VideoList extends Component {
  render() {
    const videos = this.props.videos;

    const content = videos.map(video => {
      return <VideoItem key={video.id.videoId} video={video} onVideoSelect={this.props.onVideoSelect} />;
    });

    return <div className="ui relaxed divided list">{content}</div>;
  }
}
