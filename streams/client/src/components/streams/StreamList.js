import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

export class StreamList extends Component {
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="large icon middle aligned camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  componentDidMount = () => {
    this.props.fetchStreams();
  };
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams)
  };
};

const mapDispatchToProps = {
  fetchStreams
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamList);
