import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }

  renderInput = formProps => {
    return <input {...formProps.input} />;
  };
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
