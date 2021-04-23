import { connect } from 'react-redux';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import Navigation from './Navigation';
import { getIsAuthenticated } from '../redux/auth/auth-selectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid black',
  },
};

const AppBar = ({ isAuthentificated }) => (
  <header style={styles.header}>
    <Navigation />
    {isAuthentificated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => {
  return {
    isAuthentificated: getIsAuthenticated(state),
  };
};

export default connect(mapStateToProps, null)(AppBar);
