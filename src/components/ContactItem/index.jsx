import React from "react";
import PropTypes from "prop-types";
import styles from './styles.module.scss'

const ContactsItem = (props) => (
    <li className={styles.item}>
        {props.name}: {props.number} <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </li>
)

ContactsItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default ContactsItem;