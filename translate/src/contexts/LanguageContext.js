import React, { Component } from 'react';

const Context = React.createContext('english');

export class LanguageStore extends Component {
  state = { language: 'english' };

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }

  onLanguageChange = language => {
    this.setState({ language });
  };
}

export default Context;
