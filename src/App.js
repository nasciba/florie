import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthService from './components/auth/auth-service';
import ProtectedRoute from './components/auth/protected-route';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import ProductsList from './components/products-admin/ProductsListAdmin';
import ProductDetails from './components/product-details/ProductDetails';
import AddProduct from './components/products-admin/AddProduct';
import EditProduct from './components/products-admin/EditProduct';
import Cart from './components/cart/Cart';
import Profile from './components/profile/Profile';
import MyData from './components/profile/MyData'
import EditProfile from './components/profile/EditProfile'
import MyOrders from './components/profile/MyOrders'
import Order from './components/order/Order'
import OrderDetails from './components/order/OrderDetails';
import Products from './components/products-categories-catalog/Products';
import { StyledPageContainer, StyledContentWrap } from './App-Styled';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarOpen: false,
      loggedUser: null,
      isLoading: true,
      idsOfHighlitedProducts: ["5e7c9ae793d2160024e66ffa", "5e7ca91293d2160024e6700f", "5e7c95ce93d2160024e66ff2", "5e7cab8793d2160024e67013", "5e7ca7f293d2160024e6700e", "5e7c9d5993d2160024e66ffe"],
      listOfProducts: [],
      cart: [],
      totalPrice: 0
    };
    this.service = new AuthService();
  }
  
  addToCart = (id) => {
    let cart = [...this.state.cart];

    axios.get(`${process.env.REACT_APP_API_URL}/api/products/${id}`)
      .then(responseFromApi => {
        let response = responseFromApi.data;
        let foundItem = cart.find(element => {
          return element.id === response._id
        })
        if (foundItem === undefined) {
          cart.push(
            {
              id: response._id,
              quantity: 1,
              price: response.price,
              name: response.name,
              brand: response.brand,
              image: response.imageUrl
            }
          );
          this.updateCart(cart);
          return cart;
        }
        else {
          return alert('Você já adicionou este item ao carrinho :)')
        };
      })

      .catch(error => {
        console.log(error)
      })
  }

  updateCart = async (cart) => {
    const totalPrice = await this.getTotalPrice(cart);
    const newStateCart = { cart: cart };
    const newStateTotalPrice = { totalPrice: totalPrice }
    await this.setState(newStateCart);
    await this.setState(newStateTotalPrice)
    sessionStorage.setItem('cart', JSON.stringify(newStateCart));
    sessionStorage.setItem('totalPrice', JSON.stringify(newStateTotalPrice));
  }

  removeFromCart = async (productId) => {
    let cart = [...this.state.cart]
    let item = cart.findIndex(element => {
      return element.id === productId
    })
    cart.splice(item, 1);
    await this.updateCart(cart);

  }

  emptyCart = () => {
    this.setState({ cart: [], totalPrice: 0 });
  }

  getTotalPrice = (newCart) => {
    let cart = newCart || [...this.state.cart];
    let prices = 0;
    cart.forEach(
      productInTheCart => {
        prices = prices + (productInTheCart.price * productInTheCart.quantity);
      }
    )
    return prices;

  }

  addItem = (productId) => {
    let cart = [...this.state.cart]
    let item = cart.find(element => {
      return element.id === productId
    })
    if (item.quantity < 15) {
      item.quantity += 1;
      this.updateCart(cart);
    }
    return;
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
      this.updateCart(cart);
      return;
    }
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  fetchUser() {
    if (this.state.loggedUser === null) {
      this.service.loggedin()
        .then(response => {
          this.setState({
            loggedUser: response,
            isLoading: false
          });
        })
        .catch(err => {
          this.setState({
            loggedUser: false,
            isLoading: false
          })
        })
    }
  }

  getTheUser = async (userObj) => {
    await this.setState({
      loggedUser: userObj
    })
  }

  getAllProducts = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/products`)
      .then(responseFromApi => {
        this.setState({
          listOfProducts: responseFromApi.data
        })
      })
  }

  sessionStorageCart = async () => {
    const stringOfCartInTheStorage = sessionStorage.cart;
    if (stringOfCartInTheStorage !== undefined && !this.state.cart.length) {
      await this.setState(JSON.parse(stringOfCartInTheStorage));
    }
    else {
      return null
    }
  }

  sessionStorageTotalPrice = () => {
    const totalPrice = sessionStorage.totalPrice;
    if (totalPrice !== undefined && this.state.totalPrice === 0) {
      this.setState(JSON.parse(totalPrice));
    }
    else {
      return null
    }
  }

  sessionStorageUser = () => {
    const loggedUserinStorage = sessionStorage.loggedUser;
    if (loggedUserinStorage !== undefined && this.state.loggedUser === null) {
      return this.getTheUser(JSON.parse(loggedUserinStorage))
    }
    else {
      return null
    }
  }


  componentDidMount() {
    this.sessionStorageUser();
    this.sessionStorageCart();
    this.sessionStorageTotalPrice();
    this.getAllProducts();
  }
  
  
  render() {
    this.fetchUser();
    if (this.state.loggedUser) {
      return (
        <StyledPageContainer>
          <BrowserRouter>
            {/* <Navbar cartCount={this.state.cart.length} /> */}
            <Navbar cartCount={this.state.cart} navbarState = {this.state.navbarOpen} handleNavbar = {this.handleNavbar } />
            <Switch>
              {this.state.listOfProducts.length ? <ProtectedRoute loggedInUser={this.state.loggedUser} listOfProducts={this.state.listOfProducts} deleteProduct={this.deleteProduct} path='/list-admin' component={ProductsList} /> : null}
              <ProtectedRoute component={Profile} loggedInUser={this.state.loggedUser} emptyCart={this.emptyCart} path='/profile' getUser={this.getTheUser} />
              <ProtectedRoute component={AddProduct} path='/add-product' loggedInUser={this.state.loggedUser} />
              <ProtectedRoute component={Order} path='/order' loggedInUser={this.state.loggedUser} cart={this.state.cart} totalPrice={this.state.totalPrice} />
              <ProtectedRoute component={OrderDetails} path='/order-details' emptyCart={this.emptyCart} loggedInUser={this.state.loggedUser} cart={this.state.cart} totalPrice={this.state.totalPrice} />
              <ProtectedRoute component={MyOrders} loggedInUser={this.state.loggedUser} path='/my-orders/:id' />
              <ProtectedRoute component={MyData} loggedInUser={this.state.loggedUser} path='/my-data' />
              <Route exact path='/edit-profile/:id' render={(props) => <EditProfile {...props} loggedInUser={this.state.loggedUser} />} />
              <Route exact path='/edit-product/:id' component={EditProduct} />
              <Route exact path='/products/:id' render={(props) => <ProductDetails {...props} addItemToCart={this.addToCart} />} />
              <Route exact path='/cart' render={(props) => <Cart {...props} itemsInTheCart={this.state.cart} deleteItem={this.removeFromCart} removeItem={this.removeItem} addItem={this.addItem} totalPrice={this.state.totalPrice} />} />
              <Route exact path='/login' render={(props) => <Login {...props} getUser={this.getTheUser} />} />
              <Route exact path='/signup' render={(props) => <Signup {...props} getUser={this.getTheUser} />} />
              {this.state.listOfProducts.length ? <Route exact path='/' render={(props) => <Home {...props} highlitedProducts={this.state.idsOfHighlitedProducts} addItemToCart={this.addToCart} listOfProducts={this.state.listOfProducts} />} /> : null}
              {this.state.listOfProducts.length ? <Route exact path='/catalog' render={(props) => <Products {...props} addItemToCart={this.addToCart} listOfProducts={this.state.listOfProducts} />} /> : null}
              {this.state.listOfProducts.length ? <Route exact path='/bath' render={(props) => <Products {...props} addItemToCart={this.addToCart} listOfProducts={this.state.listOfProducts.filter(product => product.type === "Higiene")} />} /> : null}
              {this.state.listOfProducts.length ? <Route exact path='/body' render={(props) => <Products {...props} addItemToCart={this.addToCart} listOfProducts={this.state.listOfProducts.filter(product => product.type === "Corpo")} />} /> : null}
              {this.state.listOfProducts.length ? <Route exact path='/face' render={(props) => <Products {...props} addItemToCart={this.addToCart} listOfProducts={this.state.listOfProducts.filter(product => product.type === "Rosto")} />} /> : null}
              {this.state.listOfProducts.length ? <Route exact path='/perfumes' render={(props) => <Products {...props} addItemToCart={this.addToCart} listOfProducts={this.state.listOfProducts.filter(product => product.type === "Perfumes")} />} /> : null}
              {this.state.listOfProducts.length ? <Route exact path='/makeup' render={(props) => <Products {...props} addItemToCart={this.addToCart} listOfProducts={this.state.listOfProducts.filter(product => product.type === "Maquiagem")} />} /> : null}
              {this.state.listOfProducts.length ? <Route exact path='/hair' render={(props) => <Products {...props} addItemToCart={this.addToCart} listOfProducts={this.state.listOfProducts.filter(product => product.type === "Cabelo")} />} /> : null}
            </Switch>
          </BrowserRouter>
        </StyledPageContainer>
      );
    }
    else if (this.state.isLoading) {
      return (
        <StyledPageContainer>
          <h4>Carregando</h4>
        </StyledPageContainer>
      )
    }
    else {
      return (
        <StyledPageContainer>
          <BrowserRouter>
            {/* <Navbar cartCount={this.state.cart.length} /> */}
            <Navbar navbarState = {this.state.navbarOpen} handleNavbar = {this.handleNavbar } cartCount = {this.state.cart}/>
            <Switch>
              <StyledContentWrap>
                <ProtectedRoute loggedInUser={this.state.loggedUser} path='/list-admin' deleteProduct={this.deleteProduct} component={ProductsList} />
                <ProtectedRoute component={AddProduct} path='/add-product' loggedInUser={this.state.loggedUser} />
                <ProtectedRoute component={Order} path='/order' loggedInUser={this.state.loggedUser} cart={this.state.cart} totalPrice={this.state.totalPrice} />
                <ProtectedRoute component={Profile} loggedInUser={this.state.loggedUser} emptyCart={this.emptyCart} path='/profile' getUser={this.getTheUser} />
                <ProtectedRoute component={OrderDetails} path='/order-details' loggedInUser={this.state.loggedUser} cart={this.state.cart} totalPrice={this.state.totalPrice} />
                <ProtectedRoute component={MyData} loggedInUser={this.state.loggedUser} path='/my-data' />
                <ProtectedRoute component={MyOrders} loggedInUser={this.state.loggedUser} path='/my-orders/:id' />
                <Route exact path='/products/:id' render={(props) => <ProductDetails {...props} addItemToCart={this.addToCart} />} />
                <Route exact path='/signup' render={(props) => <Signup {...props} getUser={this.getTheUser} />} />
                <Route exact path='/login' render={(props) => <Login {...props} getUser={this.getTheUser} />} />
                <Route exact path='/cart' render={(props) => <Cart {...props} itemsInTheCart={this.state.cart} deleteItem={this.removeFromCart} removeItem={this.removeItem} addItem={this.addItem} totalPrice={this.state.totalPrice} />} />
                {this.state.listOfProducts.length ? <Route exact path='/' render={(props) => <Home {...props} highlitedProducts={this.state.idsOfHighlitedProducts} addItemToCart={this.addToCart} listOfProducts={this.state.listOfProducts} />} /> : null}
                {this.state.listOfProducts.length ? <Route exact path='/catalog' render={(props) => <Products {...props} addItemToCart={this.addToCart} listOfProducts={this.state.listOfProducts} />} /> : null}
                {this.state.listOfProducts.length ? <Route exact path='/bath' render={(props) => <Products {...props} addItemToCart={this.addToCart} listOfProducts={this.state.listOfProducts.filter(product => product.type === "Higiene")} />} /> : null}
                {this.state.listOfProducts.length ? <Route exact path='/body' render={(props) => <Products {...props} addItemToCart={this.addToCart} listOfProducts={this.state.listOfProducts.filter(product => product.type === "Corpo")} />} /> : null}
                {this.state.listOfProducts.length ? <Route exact path='/face' render={(props) => <Products {...props} addItemToCart={this.addToCart} listOfProducts={this.state.listOfProducts.filter(product => product.type === "Rosto")} />} /> : null}
                {this.state.listOfProducts.length ? <Route exact path='/perfumes' render={(props) => <Products {...props} addItemToCart={this.addToCart} listOfProducts={this.state.listOfProducts.filter(product => product.type === "Perfumes")} />} /> : null}
                {this.state.listOfProducts.length ? <Route exact path='/makeup' render={(props) => <Products {...props} addItemToCart={this.addToCart} listOfProducts={this.state.listOfProducts.filter(product => product.type === "Maquiagem")} />} /> : null}
                {this.state.listOfProducts.length ? <Route exact path='/hair' render={(props) => <Products {...props} addItemToCart={this.addToCart} listOfProducts={this.state.listOfProducts.filter(product => product.type === "Cabelos")} />} /> : null}

              </StyledContentWrap>
            </Switch>
          </BrowserRouter>
        </StyledPageContainer>
      )
    }
  }
}

export default App;
