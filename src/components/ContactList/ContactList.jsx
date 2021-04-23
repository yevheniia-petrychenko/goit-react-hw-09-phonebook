import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactCard from './ContactCard';
import { deleteContact } from '../../operations/operations';
import { getVisibleContact } from '../../selectors/selectors';
import './contactList.css';

const ContactList = ({ onDeleteContact, contacts }) => {
  return (
    <ul className="contactList">
      {contacts.map(({ name, number, contactId }) => {
        return (
          <ContactCard
            name={name}
            number={number}
            id={contactId}
            key={contactId}
            onDelete={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  contacts: getVisibleContact(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
