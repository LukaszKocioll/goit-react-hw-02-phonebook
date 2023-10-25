import React, { Component } from 'react';
import { ContactForm } from './PhoneBookContactForm';
import { ContactList } from './PhoneBookContactList';


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <h2>Add a Contact</h2>
        <ContactForm onAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
          onFilterChange={(event) => this.setState({ filter: event.target.value })}
        />
      </div>
    );
  }
}

export default App;
