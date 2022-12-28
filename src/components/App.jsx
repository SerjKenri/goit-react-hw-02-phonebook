import React, { Component } from "react";
import { nanoid } from 'nanoid'
import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";



export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(5), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(5), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(5), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(5), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = e => {
    const id = nanoid();
    const name = e.name;
    const number = e.number;
    const contactsLists = [...this.state.contacts];

    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ name, id, number });
    }

    this.setState({ contacts: contactsLists });
  };

  handleDelete = (id) => {
    this.setState(prevState => {
      const newContactList = prevState.contacts.filter((contact) => contact.id !== id);
      return { contacts: newContactList };
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFilter = () => {
    const filterContactsList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return filterContactsList;
  };
  
render() {
  const { filter} = this.state;


  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: '#010101'
      }}
    >
      <Section title="Phonebook">
        <ContactForm onSubmit={this.handleSubmit}/>
      </Section>

      <Section title="Contacts">
        <Filter filter={filter} onChange={this.handleChange}/>
        <ContactList contacts={this.handleFilter()} onDelete={this.handleDelete}/>
      </Section>
    </div>
  );
};
};
