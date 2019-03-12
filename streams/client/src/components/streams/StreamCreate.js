import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  render() {
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
      </form>
    );
  }

  renderInput = ({ input, label }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  };
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
