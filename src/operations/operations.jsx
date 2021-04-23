import axios from 'axios';
import {
  addRequest,
  addSuccess,
  addError,
  deleteRequest,
  deleteSuccess,
  deleteError,
  fetchRequest,
  fetchSuccess,
  fetchError,
} from '../redux/actions';

const fetchContact = () => async dispatch => {
  dispatch(fetchRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchError(error.message));
  }

  // axios
  //   .get('/contacts')
  //   .then(({ data }) => dispatch(fetchSuccess(data)))
  //   .catch(error => dispatch(fetchError(error.message)));
};

const addContact = ({ name, number }) => dispatch => {
  const contact = { name, number };
  dispatch(addRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addSuccess(data)))
    .catch(error => dispatch(addError(error.message)));
};

const deleteContact = contactId => dispatch => {
  dispatch(deleteRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteSuccess(contactId)))
    .catch(error => dispatch(deleteError(error.message)));
};

export { addContact, deleteContact, fetchContact };
