// import LoginView from '../views/LoginView';
// import RegisterView from '../views/RegisterView';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: 'black',
  },
  activeLink: {
    color: 'red',
  },
};

const AuthNav = () => (
  <div>
    <NavLink to="/register" style={styles.link} activeStyle={styles.activeLink}>
      Registration
    </NavLink>

    <NavLink to="/login" style={styles.link} activeStyle={styles.activeLink}>
      Log In
    </NavLink>
  </div>
);
export default AuthNav;
