import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
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
      cart: []

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



  addToCart = (id) => {
    let cart = this.state.cart
    if (cart.includes(id)) {
      return null
    }
    else {
      cart.push(id)
      this.setState({ cart: cart })
      localStorage.setItem('cart', cart)
      console.log(cart)
    }
  }

  removeFromCart = (id) => {
    let indexOfArray = this.state.cart.indexOf(id)
    let cart = this.state.cart
    cart.splice(indexOfArray, 1)
    this.setState({ cart: cart })
  }

  componentDidMount() {
    const storageCart = localStorage.cart;
    if(storageCart.length) {
      let arrayStorageCart = storageCart.split(',');
      this.setState({ cart: arrayStorageCart})
    }

  }
  render() {

    this.fetchUser()
    if (this.state.loggedInUser) {
      return (
        <div className="App">
          <BrowserRouter>
            <Navbar userInSession={this.state.loggedInUser} />
            <Switch>
              <Route exact path='/' render={(props) => <Home {...props} addItemToCart={this.addToCart} />} />
              <Route exact path='/list-admin' render={() => <ProductsList getUser={this.getTheUser} />} />
              <Route exact path='/add-product' component={AddProduct} />
              <Route exact path='/edit-product/:id' component={EditProduct} />
              <Route exact path='/products/:id' render={(props) => <ProductDetails {...props} addItemToCart={this.addToCart} deleteItem={this.removeFromCart}/>} />


            </Switch>
          </BrowserRouter>
        </div>
      );
    }
    else {
      return (
        <div>
          <BrowserRouter>
            <Navbar userInSession={this.state.loggedInUser} cartCount={this.state.cart.length}  />
            <Switch>
              <Route exact path='/' render={(props) => <Home {...props} addItemToCart={this.addToCart} />} />
              <Route exact path='/products/:id' render={(props) => <ProductDetails {...props} addItemToCart={this.addToCart} />} />
              <Route exact path='/signup' render={(props) => <Signup {...props} getUser={this.getTheUser} />} />
              <Route exact path='/login' render={(props) => <Login {...props} getUser={this.getTheUser} />} />
              <Route exact path='/cart' render={(props) => <Cart {...props} itemsInTheCart={this.state.cart} deleteItem={this.removeFromCart}/>} />
            </Switch>
          </BrowserRouter>
        </div>
      )
    }

  }
}




export default App;
