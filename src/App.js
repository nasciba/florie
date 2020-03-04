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
import ShoppingBag from './components/shopping-bag/ShoppingBag'
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
    this.setState({cart: [id] })
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
              <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser} />} />
              <Route exact path='/login' render={() => <Login getUser={this.getTheUser} />} />
              <Route exact path='/list-admin' component={ProductsList} />
              <Route exact path='/products-list-admin/:id' component={ProductDetails} />
              <Route exact path='/add-product' component={AddProduct} />
              <Route exact path='/edit-product/:id' component={EditProduct} />
              <Route exact path='/products/:id' component={ProductDetails} />



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
            <Route exact path='/products/:id' component={ProductDetails} />
            <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser} />} />
            <Route exact path='/login' render={() => <Login getUser={this.getTheUser} />} />
            <Route exact path='/cart' render={() => <Login getUser={this.getTheUser} />} />

          </BrowserRouter>
        </div>
      )
    }

  }
}




export default App;
