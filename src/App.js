import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {AppContextProvider} from './context/AppContext';

// components
import Header from './components/Header';
import PrivateRoute from './components/routes/PrivateRoute';
import AdminRoute from './components/routes/AdminRoute';

// pages
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import AddProduct from './pages/AddProduct';
import AddTopping from './pages/AddTopping';
import Transaction from './pages/Transaction';

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/cart" component={Cart} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute path="/product/:id" component={Product} />
          <AdminRoute exact path="/addproduct" component={AddProduct} />
          <AdminRoute exact path="/addtopping" component={AddTopping} />
          <AdminRoute exact path="/transaction" component={Transaction} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AppContextProvider>
  );
}

export default App;