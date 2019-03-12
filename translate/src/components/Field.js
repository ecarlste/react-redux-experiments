import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default class Field extends Component {
  static contextType = LanguageContext;

  static config = {
    english: {
      labelText: 'Name'
    },
    dutch: {
      labelText: 'Naam'
    }
  };

  render() {
    const config = Field.config[this.context];

    return (
      <div className="ui field">
        <label>{config.labelText}</label>
        <input />
      </div>
    );
  }
}
