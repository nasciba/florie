import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthService from './components/auth/auth-service';
import ProtectedRoute from './components/auth/protected-route';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import ProductsList from './components/products/ProductsListAdmin';
import ProductDetails from './components/product-details/ProductDetails';
import AddProduct from './components/products/AddProduct';
import EditProduct from './components/products/EditProduct';
import Cart from './components/cart/Cart';
import Profile from './components/profile/Profile';
import Order from './components/order/Order'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedUser: null,
      isLoading: true,
      cart: [],
    };

    this.service = new AuthService();

  }

  fetchUser() {
    if (this.state.loggedUser === null) {
      this.service.loggedin()
        .then(response => {
          this.setState({
            loggedUser: response,
            isLoading: false
          })
        })
        .catch(err => {
          this.setState({
            loggedUser: false,
            isLoading: false
          })
        })
    }
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedUser: userObj
    })
  }



  addToCart = (productId) => {
    let cart = this.state.cart
    if ((cart.find(element => {
      return element.id === productId
    })) !== undefined) {
      return null
    }
    else {
      cart.push(
        {
          id: productId,
          quantity: 1
        }
      );
      this.setState({ cart: cart })
      // sessionStorage.setItem('cart', cart)
      console.log(cart)
    }
  }

  addItem = (productId) => {
    console.log(productId)
    let cart = [...this.state.cart]
    let item = cart.find(element => {
      return element.id === productId
    })
    if (item.quantity === 15) {
      return item.quantity
    }
    else {
      return (item.quantity += 1,
        this.setState({ cart: cart })
      )
    }
  }

  removeItem = (productId) => {
    let cart = [...this.state.cart]
    let item = cart.find(element => {
      return element.id === productId
    })
    if (item.quantity === 1) {
      return item.quantity
    }
    else {
      item.quantity -= 1;
      this.setState({ cart: cart })
    }
  }
  removeFromCart = (productId) => {
    let cart = [...this.state.cart]
    let item = cart.findIndex(element => {
      return element.id === productId
    })
    cart.splice(item, 1);
    this.setState({ cart: cart })

  }

  componentDidMount() {
    const storageCart = sessionStorage.cart;
    if (storageCart !== undefined) {
      let arrayStorageCart = storageCart.split(',');
      this.setState({ cart: arrayStorageCart })
    }
    this.fetchUser()

  }

  render() {
    if (this.state.loggedUser) {
      console.log('entrou logged')
      return (
        <div className="App">
          <BrowserRouter>
          <Navbar cartCount={this.state.cart.length}/>
            <Switch>
              <ProtectedRoute userInSession={this.state.loggedUser} path='/list-admin' component={ProductsList} />
              <ProtectedRoute component={Profile} userInSession={this.state.loggedUser} path='/profile' getUser={this.getTheUser} />
              <ProtectedRoute component={AddProduct} path='/add-product' userInSession={this.state.loggedUser} getUser={this.getTheUser} />
              <ProtectedRoute userInSession={this.state.loggedUser} path='/order' cart={this.state.cart} component={Order} />

              <Route exact path='/' render={(props) => <Home {...props} addItemToCart={this.addToCart} />} />
              <Route exact path='/add-product' component={AddProduct} />
              <Route exact path='/edit-product/:id' component={EditProduct} />
              <Route exact path='/products/:id' render={(props) => <ProductDetails {...props} addItemToCart={this.addToCart} />} />
              <Route exact path='/cart' render={(props) => <Cart {...props} removeItem={this.removeItem} addItem={this.addItem} itemsInTheCart={this.state.cart} deleteItem={this.removeFromCart} totalPrice={this.state.totalPrice}/>} />



            </Switch>
          </BrowserRouter>
        </div>
      );
    }
    else if(this.state.isLoading) {
      console.log('entrou')
      return (
        <div>
          Carregando
        </div>
      )
    } else {
      console.log('entrou nao logado')
      return (
        <BrowserRouter>
          <Navbar cartCount={this.state.cart.length} />
          <Switch>
            <ProtectedRoute userInSession={this.state.loggedUser} path='/list-admin' component={ProductsList} />
            <ProtectedRoute component={AddProduct} path='/add-product' userInSession={this.state.loggedUser} getUser={this.getTheUser} />
            <ProtectedRoute userInSession={this.state.loggedUser} path='/order' component={Order} />
            <ProtectedRoute component={Profile} userInSession={this.state.loggedUser} path='/profile' getUser={this.getTheUser} />

            <Route exact path='/' render={(props) => <Home {...props} addItemToCart={this.addToCart} />} />
            <Route exact path='/products/:id' render={(props) => <ProductDetails {...props} addItemToCart={this.addToCart} />} />
            <Route exact path='/signup' render={(props) => <Signup {...props} getUser={this.getTheUser} />} />
            <Route exact path='/login' render={(props) => <Login {...props} getUser={this.getTheUser} />} />
            <Route exact path='/cart' render={(props) => <Cart {...props} removeItem={this.removeItem} addItem={this.addItem} itemsInTheCart={this.state.cart} deleteItem={this.removeFromCart} totalPrice={this.state.totalPrice}/>} />

          </Switch>
        </BrowserRouter>
      )
      
    }

  }
}




export default App;
