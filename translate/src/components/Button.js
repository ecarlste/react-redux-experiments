import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export default class Button extends Component {
  render() {
    return <ColorContext.Consumer>{color => this.renderButton(color)}</ColorContext.Consumer>;
  }

  renderButton = color => {
    return (
      <LanguageContext.Consumer>
        {({ language }) => <button className={`ui button ${color}`}>{this.renderText(language)}</button>}
      </LanguageContext.Consumer>
    );
  };

  renderText = language => {
    return language === 'english' ? 'Submit' : 'Voorleggen';
  };
}
