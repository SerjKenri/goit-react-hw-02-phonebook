import propTypes from 'prop-types';
import css from './ContactList.module.css';
import { nanoid } from 'nanoid'


export const ContactList = ({ contacts, onDelete }) => (
    <ul className={css.ulStyle}>
        {contacts.map(contact =>(
            <li key={nanoid(5)} className={css.liStyle}>{contact.name}: {contact.number}
            <button type='button' className={css.contactBtn} onClick={(() => onDelete(contact.id))}>Delete</button>
            </li>
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: propTypes.arrayOf(propTypes.exact({id: propTypes.string.isRequired,
    name: propTypes.string.isRequired, number: propTypes.string.isRequired,})
    ),
    onDelete: propTypes.func.isRequired,
}