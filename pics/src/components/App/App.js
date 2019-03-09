import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <Container>
          <SearchBar />
        </Container>
      </div>
    );
  }
}

export default App;
