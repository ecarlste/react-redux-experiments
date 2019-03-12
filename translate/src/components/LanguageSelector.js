import React, { Component } from 'react';

export class LanguageSelector extends Component {
  render() {
    return (
      <div>
        Select a Language:
        <i className="flag us" onClick={() => this.props.onLanguageChange('english')} />
        <i className="flag nl" onClick={() => this.props.onLanguageChange('dutch')} />
      </div>
    );
  }
}
