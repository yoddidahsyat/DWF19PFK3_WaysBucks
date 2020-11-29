import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {AppContextProvider} from './context/AppContext';

// components
import Header from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

// pages
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <Header/>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/cart" component={Cart} />
          <PrivateRoute exact path="/product" component={Product} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AppContextProvider>
  );
}

export default App;