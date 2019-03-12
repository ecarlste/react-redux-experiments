import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default class Button extends Component {
  static config = {
    english: {
      submitText: 'Submit'
    },
    dutch: {
      submitText: 'Voorleggen'
    }
  };

  render() {
    return (
      <LanguageContext.Consumer>
        {language => <button className="ui button primary">{Button.config[language].submitText}</button>}
      </LanguageContext.Consumer>
    );
  }
}
