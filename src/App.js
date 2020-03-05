import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthService from './components/auth/auth-service';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import ProductsList from './components/products/ProductsListAdmin';
import ProductDetails from './components/product-details/ProductDetails';
import AddProduct from './components/products/AddProduct';
import EditProduct from './components/products/EditProduct';
import Cart from './components/cart/Cart'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedInUser: null,
      cart: {},
    };
    this.service = new AuthService();

  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
        .then(response => {
          console.log(response);
          this.setState({
            loggedInUser: response

          })
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          })
        })
    }
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  addToCart = (e) => {
    const { params } = this.props.match;
    let cart = this.state.cart
    cart[params.id] = cart[params.id] !== undefined ? cart[params.id] + 1 : 1;
    console.log("aqui", cart)
    this.setState({ cart: cart })
    console.log(this.state);
  }
  render() {

    this.fetchUser()
    if (this.state.loggedInUser) {
      return (
        <div className="App">
          <BrowserRouter>
            <Navbar userInSession={this.state.loggedInUser} />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/list-admin' render={() => <ProductsList getUser={this.getTheUser} />} />
              <Route exact path='/products-list-admin/:id' component={ProductDetails} />
              <Route exact path='/add-product' component={AddProduct} />
              <Route exact path='/edit-product/:id' component={EditProduct} />

              {/* <Route
  path='/products/:id'
  component={() => <ProductDetails teste='testestetetsd' addItemToCart={this.addToCart} />}
/> */}

            </Switch>
          </BrowserRouter>
        </div>
      );
    }
    else {
      return (
        <div>
          <BrowserRouter>
            <Navbar userInSession={this.state.loggedInUser} />
            <Route exact path='/' component={Home} />
            <Route exact path='/products/:id' render={(props) => <ProductDetails {...props} addItemToCart={this.addToCart}  />} />
            <Route exact path='/signup' render={(props) => <Signup {...props} getUser={this.getTheUser} />} />
            <Route exact path='/login' render={(props) => <Login {...props} getUser={this.getTheUser} />} />            
            <Route exact path='/cart' render={(props) => <Cart {...props} getUser={this.getTheUser} />} />
          </BrowserRouter>
        </div>
      )
    }

  }
}




export default App;
