import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './styles.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = (event) => {
    this.setState({ number: event.target.value });
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  handleAddContact = () => {
    const { name, number, contacts } = this.state;
    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a valid name and number.');
      return;
    }

    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState({
      contacts: [...contacts, newContact],
      name: '',
      number: '',
    });
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { name, number, contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <h2>Add a Contact</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="number">Number:</label>
          <input
            type="tel"
            id="number"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleNumberChange}
          />
        </div>
        <button onClick={this.handleAddContact}>Add Contact</button>

        <h2>Contacts</h2>
        <input
          type="text"
          name="filter"
          placeholder="Search contacts"
          value={filter}
          onChange={this.handleFilterChange}
        />
        <ul>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button onClick={() => this.handleDeleteContact(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PhoneBook;
