import React, { Component } from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';
import { fetchStream } from '../../actions';

export class StreamShow extends Component {
  videoRef = React.createRef();

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <video ref={this.videoRef} style={{ width: '100%' }} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }

  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params);
    this.buildPlayer();
  };

  buildPlayer = () => {
    if (this.player || !this.props.stream) {
      return;
    }

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${this.props.match.params}.flv`
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  };
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
});

const mapDispatchToProps = {
  fetchStream
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamShow);
