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
  Link
} from "react-router-dom";

function App() {
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
        <Route path="/login">
          <LoginPage/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
