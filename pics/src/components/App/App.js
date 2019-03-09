import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import SearchBar from '../SearchBar/SearchBar';
import unsplash from '../../clients/unsplash';

class App extends Component {
  state = { images: [] };

  render() {
    return (
      <Container style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </Container>
    );
  }

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term
      }
    });

    this.setState({ images: response.data.results });
  };
}

export default App;
