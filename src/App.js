import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Product from './pages/Product';
import {ProductList}  from './pages/ProductList';
import RegisterPage from './pages/RegisterPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import CartPage from './pages/CartPage';
import {useSelector} from "react-redux";
import Status from './pages/Status';
import { SearchPage } from './pages/SearchPage';
import UserPage from './pages/UserPage';

function App() {

  const user = useSelector ((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/products/:category">
          <ProductList/>
        </Route>
        <Route path="/product/:id">
          <Product/>
        </Route>
        <Route path="/register">
          <RegisterPage/>
        </Route>
        <Route path="/success">
          <Status/>
        </Route>
        <Route path="/search">
          <SearchPage/>
        </Route>
        <Route path="/user">
          <UserPage/>
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <LoginPage />}</Route>
        <Route path="/cart">
          <CartPage/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
