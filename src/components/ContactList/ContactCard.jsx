import PropTypes from 'prop-types';

const ContactCard = ({ name, number, contactId, onDelete }) => {
  return (
    <li key={contactId}>
      <span>{name}</span>
      <span>{number}</span>
      <button
        className="deleteButton"
        onClick={() => {
          onDelete(contactId);
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactCard;
