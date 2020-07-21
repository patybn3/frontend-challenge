import React, { Component } from 'react';
import { validateForm, submitForm } from './helperFunctions';

class Signup extends Component {

  state = {
    values: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      role: '',
    },
    errors: {},
    submitted: false
  }

  handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    this.setState(() => ({
      fields: {
        ...this.state.fields,
        [field]: value
      }
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      errors: validateForm(this.state.values)
    }, () => {

      if (!Object.keys(this.state.errors).length) {
        submitForm(this.state.values).then(data => {
          if (data.status === 200) {
            this.setState({submitted: true});
          }
        });
      }
    });
  }

  render() {
    return (
      this.state.submitted
      ?
        <div>
          <h4>Message</h4>
        </div>
      :
        <form>
          form will go here or call Form.js
        </form>
    );
  }
}

export default Signup
