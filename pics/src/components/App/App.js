import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </Container>
    );
  }

  onSearchSubmit = term => {
    console.log(term);
  };
}

export default App;
