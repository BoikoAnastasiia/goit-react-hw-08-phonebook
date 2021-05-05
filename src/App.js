import Container from './Components/Container';
import { Component, Suspense, lazy } from 'react';
import AppBar from './Components/AppBar/AppBar';
import PrivateRoute from './Components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import { connect } from 'react-redux';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              component={RegisterView}
              restricted
              redirectTo="/todos"
            />
            <PublicRoute
              path="/login"
              restricted
              component={LoginView}
              redirectTo="/todos"
            />
            <PrivateRoute
              path="/todos"
              component={ContactsView}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
