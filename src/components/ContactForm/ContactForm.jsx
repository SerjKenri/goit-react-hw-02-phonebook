import React, {Component} from "react";
import propTypes from 'prop-types';
import css from './ContactForm.module.css'





export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }
    
    static propTypes = {
        onSubmit: propTypes.func.isRequired,
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ name:'', number: ''})
    };

    render() {
        const { name, number } = this.state;

        return (
            <>
                <form className={css.form} onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input 
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                placeholder="Enter name"
                onChange={this.handleChange}
                className={css.formName}
                />

                <label>Number</label>
                <input
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                placeholder="Enter number"
                onChange={this.handleChange}
                className={css.formNumber}
                />

                <button type="submit" className={css.contactBtn}>Add contact</button>
                </form>
            </>
        )
    }
}

