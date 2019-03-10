import React, { Component } from 'react';
import { SearchBar } from 'codecartel-ui-react';
import youtube from '../../clients/youtube';
import VideoList from '../VideoList/VideoList';

class App extends Component {
  state = { videos: [] };

  render() {
    return (
      <div className="ui container">
        <SearchBar label="Video Search" onSubmit={this.onSubmit} />
        <VideoList videos={this.state.videos} />
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
}

export default App;
