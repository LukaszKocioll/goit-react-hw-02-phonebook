import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = (event) => {
    this.setState({ number: event.target.value });
  };

  handleAddContact = () => {
    const { name, number } = this.state;
    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a valid name and number.');
      return;
    }

    this.props.onAddContact({
      id: nanoid(),
      name: name,
      number: number,
    });

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={this.handleNameChange}
        />

        <label htmlFor="number">Number:</label>
        <input
          type="tel"
          id="number"
          name="number"
          value={number}
          onChange={this.handleNumberChange}
        />

        <button onClick={this.handleAddContact}>Add Contact</button>
      </div>
    );
  }
}

export default ContactForm;
