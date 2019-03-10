import React, { Component } from 'react';
import { SearchBar } from 'codecartel-ui-react';
import youtube from '../../clients/youtube';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <SearchBar label="Video Search" onSubmit={this.onSubmit} />
      </div>
    );
  }

  onSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    console.log(response);
  };
}

export default App;
