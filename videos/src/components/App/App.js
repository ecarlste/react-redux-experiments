import React, { Component } from 'react';
import { SearchBar } from 'codecartel-ui-react';
import youtube from '../../clients/youtube';
import VideoList from '../VideoList/VideoList';
import VideoDetail from '../VideoDetail/VideoDetail';

class App extends Component {
  state = { selectedVideo: null, videos: [] };

  render() {
    return (
      <div className="ui container">
        <SearchBar label="Video Search" onSubmit={this.onSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }

  onSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
}

export default App;
