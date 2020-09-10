import React, {Component} from 'react';
import './App.css';
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";
import FilterForm from "./components/FilterForm";

class App extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
    };

    componentDidMount() {
        const initial = localStorage.getItem('contacts');
        this.setState({
            contacts: initial ? JSON.parse(initial) : [],
        });
    }

    handleSubmit = (contact) => {
        if (this.state.contacts.some(c => c.name.toLowerCase() === contact.name.toLowerCase())) {
            alert(`${contact.name} is already in contacts`);
            return;
        }
        this.setState((state) => ({
            contacts: [...state.contacts, contact],
        }), () => {
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
        });
    };

    handleDelete = (id) => {
        this.setState((state) => ({
                contacts: state.contacts.filter(c => c.id !== id),
            }), () => {
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
        });
    }

    getFilteredContacts() {
        if (!this.state.filter) {
            return this.state.contacts;
        }
        return this.state.contacts.filter(c => c.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    }

    handleFilter(filter) {
        this.setState({
            filter: filter,
        });
    }

    render() {
        return <>
            <h1>Phonebook</h1>
            <ContactForm onAdd={this.handleSubmit}/>
            <h1>Contacts</h1>
            <FilterForm onFilter={(f) => this.handleFilter(f)}/>
            <ContactsList onDelete={(id) => this.handleDelete(id)}
                          contacts={this.getFilteredContacts()}/>
        </>;
    }
}

export default App;
