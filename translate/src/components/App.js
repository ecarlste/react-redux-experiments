import React, { Component } from 'react';
import UserCreate from './UserCreate';

class App extends Component {
  state = { language: 'english' };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a Language:
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>
        <UserCreate />
      </div>
    );
  }

  onLanguageChange = language => {
    this.setState({ language });
  };
}

export default App;
