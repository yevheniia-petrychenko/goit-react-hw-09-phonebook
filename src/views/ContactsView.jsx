import { Component } from 'react';
import { connect } from 'react-redux';
import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import Spiner from '../components/spiner/spiner';
import Filter from '../components/Filter/Filter';
import { fetchContact } from '../operations/operations';
import { getIsLoading } from '../selectors/selectors';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    return (
      <div className="Container">
        <h2>Phonebook</h2>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        {this.props.isLoading && <Spiner />}
      </div>
    );
  }
}

const mapStateToPops = state => ({
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContact: () => {
    dispatch(fetchContact());
  },
});

export default connect(mapStateToPops, mapDispatchToProps)(ContactsView);
