import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class SongList extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // };

  renderSongs() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderSongs()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

// const mapDispatchToProps = {};

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(SongList);
