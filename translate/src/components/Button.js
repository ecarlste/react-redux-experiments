import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

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
    return <ColorContext.Consumer>{color => this.renderButton(color)}</ColorContext.Consumer>;
  }

  renderButton = color => {
    return (
      <LanguageContext.Consumer>
        {language => <button className={`ui button ${color}`}>{Button.config[language].submitText}</button>}
      </LanguageContext.Consumer>
    );
  };
}
