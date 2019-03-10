import React, { Component } from 'react';

export default class VideoItem extends Component {
  render() {
    return <div>{this.props.video.snippet.title}</div>;
  }
}
