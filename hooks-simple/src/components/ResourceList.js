import React, { Component } from 'react';
import axios from 'axios';

export default class ResourceList extends Component {
  state = { resources: [] };

  render() {
    return <div>{this.state.resources.length}</div>;
  }

  componentDidMount = async () => {
    this.setStateWithFetchedResources(this.props.resource);
  };

  componentDidUpdate = async prevProps => {
    if (prevProps.resource !== this.props.resource) {
      this.setStateWithFetchedResources(this.props.resource);
    }
  };

  async setStateWithFetchedResources(resourceType) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`);
    this.setState({ resources: response.data });
  }
}
