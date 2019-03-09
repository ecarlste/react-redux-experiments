import React, { Component } from "react";
import { Segment, Form } from "semantic-ui-react";

class SearchBar extends Component {
  render() {
    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Image Search</label>
            <input type="text" />
          </Form.Field>
        </Form>
      </Segment>
    );
  }
}

export default SearchBar;
