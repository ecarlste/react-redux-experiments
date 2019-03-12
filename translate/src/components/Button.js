import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default class Button extends Component {
  static contextType = LanguageContext;

  static config = {
    english: {
      submitText: 'Submit'
    },
    dutch: {
      submitText: 'Voorleggen'
    }
  };

  render() {
    const currentConfig = Button.config[this.context];
    return <button className="ui primary">{currentConfig.submitText}</button>;
  }
}
