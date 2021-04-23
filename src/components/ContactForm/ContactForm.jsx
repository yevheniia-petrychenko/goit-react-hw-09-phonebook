import { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../operations/operations';
import './contactForm.css';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    number: '',
    name: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  formReset = () => {
    this.setState({ number: '', name: '' });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.name);
    console.log(this.props.contacts);
    let found = false;
    if (this.state.name === '') {
      alert(`Please provide a name`);
      return;
    }
    this.props.contacts.forEach(item => {
      if (item.name === this.state.name) {
        alert(`${this.state.name} is already in contacts`);
        found = true;
        return;
      }
    });
    if (found) {
      return;
    }
    this.props.onSubmit(this.state);
    this.formReset();
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { number, name } = this.state;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="label">
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
          </label>

          <label className="label">
            Number
            <input
              type="text"
              name="number"
              value={number}
              onChange={this.handleInputChange}
            />
          </label>

          <button className="addBtn">Add Contact</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
