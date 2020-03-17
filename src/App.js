import React, { Component } from 'react';
import axios from 'axios';
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
import Footer from './components/footer/Footer'
import { StyledPageContainer, StyledContentWrap } from './App-Styled'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedUser: null,
      isLoading: true,
      cart: [],
      totalPrice: 0
    };


    this.service = new AuthService();

  }

  addToCart = (id) => {
    let cart = [...this.state.cart];

    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(responseFromApi => {
        let response = responseFromApi.data;
        let foundItem = cart.find(element => {
          return element.id === response._id
        })
        console.log(foundItem);
        if (foundItem === undefined) {
          return (cart.push(
            {
              id: response._id,
              quantity: 1,
              price: response.price,
              name: response.name,
              brand: response.brand,
              image: response.imageUrl
            }
          ),
            this.setState({
              cart: cart
            }),
            this.getTotalPrice()
          )
        }
        else {
          return alert('Você já adicionou este item ao carrinho :)')
        };
      })

      .catch(error => {
        console.log(error)
      })
  }

  removeFromCart = (productId) => {
    let cart = [...this.state.cart]
    let item = cart.findIndex(element => {
      return element.id === productId
    })
    cart.splice(item, 1);
    this.setState({ cart: cart });
    this.getTotalPrice()

  }

  //OLD addToCart function
  // addToCart = (productId) => {
  //   let cart = this.state.cart
  //   if ((cart.find(element => {
  //     return element.id === productId
  //   })) !== undefined) {
  //     return alert('Você já adicionou este item ao carrinho :)')
  //   }
  //   else {
  //     cart.push(
  //       {
  //         id: productId,
  //         quantity: 1
  //       }
  //     );
  //     this.setState({ cart: cart })
  //     // sessionStorage.setItem('cart', cart)
  //     console.log(cart)
  //   }
  // }

  getTotalPrice = () => {
    let cart = [...this.state.cart];
    let prices = cart.reduce((acc, product) => {

      return acc = acc + (product.price * product.quantity)

    }, 0)
    this.setState({ totalPrice: prices })

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
        this.setState({ cart: cart }), this.getTotalPrice()
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
      this.setState({ cart: cart }); 
      this.getTotalPrice()
    }
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
        <StyledPageContainer>
          <BrowserRouter>
            <Navbar cartCount={this.state.cart.length} />
            <Switch>
              <ProtectedRoute userInSession={this.state.loggedUser} path='/list-admin' component={ProductsList} />
              <ProtectedRoute component={Profile} userInSession={this.state.loggedUser} path='/profile' getUser={this.getTheUser} />
              <ProtectedRoute component={AddProduct} path='/add-product' userInSession={this.state.loggedUser} getUser={this.getTheUser} />
              <ProtectedRoute userInSession={this.state.loggedUser} path='/order' cart={this.state.cart} component={Order} />

              <Route exact path='/' render={(props) => <Home {...props} addItemToCart={this.addToCart} />} />
              <Route exact path='/add-product' component={AddProduct} />
              <Route exact path='/edit-product/:id' component={EditProduct} />
              <Route exact path='/products/:id' render={(props) => <ProductDetails {...props} addItemToCart={this.addToCart} />} />
              <Route exact path='/cart' render={(props) => <Cart {...props} itemsInTheCart={this.state.cart} deleteItem={this.removeFromCart} removeItem={this.removeItem} addItem={this.addItem}   totalPrice={this.state.totalPrice} />} />



            </Switch>
            {/* <Footer></Footer> */}
          </BrowserRouter>
        </StyledPageContainer>
      );
    }
    else if (this.state.isLoading) {
      return (
        <div>
          Carregando
        </div>
      )
    } else {
      return (
        <StyledPageContainer>
          <BrowserRouter>
            <Navbar cartCount={this.state.cart.length} />
            <Switch>
              <StyledContentWrap>
                <ProtectedRoute userInSession={this.state.loggedUser} path='/list-admin' component={ProductsList} />
                <ProtectedRoute component={AddProduct} path='/add-product' userInSession={this.state.loggedUser} getUser={this.getTheUser} />
                <ProtectedRoute userInSession={this.state.loggedUser} path='/order' component={Order} />
                <ProtectedRoute component={Profile} userInSession={this.state.loggedUser} path='/profile' getUser={this.getTheUser} />

                <Route exact path='/' render={(props) => <Home {...props} addItemToCart={this.addToCart} />} />
                <Route exact path='/products/:id' render={(props) => <ProductDetails {...props} addItemToCart={this.addToCart} />} />
                <Route exact path='/signup' render={(props) => <Signup {...props} getUser={this.getTheUser} />} />
                <Route exact path='/login' render={(props) => <Login {...props} getUser={this.getTheUser} />} />
                <Route exact path='/cart' render={(props) => <Cart {...props} removeItem={this.removeItem} addItem={this.addItem} itemsInTheCart={this.state.cart} deleteItem={this.removeFromCart} totalPrice={this.state.totalPrice} />} />
              </StyledContentWrap>
            </Switch>
            {/* <Footer></Footer> */}
          </BrowserRouter>
        </StyledPageContainer>
      )

    }

  }
}




export default App;
