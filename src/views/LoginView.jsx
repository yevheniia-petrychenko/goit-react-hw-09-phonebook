import { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';

const styles = {
  form: {
    margin: 'auto',
    padding: 10,
    border: '2px solid',
    borderRadius: 5,
    width: 450,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
  btn: {},
};

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Please log in</h1>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <label style={styles.label}>
            E-mail
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" style={styles.btn}>
            LogIn
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
