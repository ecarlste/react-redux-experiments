import React, { Component } from 'react';
import Field from './Field';
import Button from './Button';

export default class UserCreate extends Component {
  render() {
    return (
      <div className="ui form">
        <Field />
        <Button />
      </div>
    );
  }
}
