import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Spiner from './components/spiner/spiner';
import { getCurrentUser } from './redux/auth/auth-operations';
import AppBar from './UserMenu/AppBar';
import PrivateRoute from './UserMenu/PrivateRoute';
import PublicRoute from './UserMenu/PublicRoute';
// import { render } from '@testing-library/react';
import { connect } from 'react-redux';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<Spiner />}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterView}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginView}
            />
            <PrivateRoute path="/contacts" component={ContactsView} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
