import React, { useCallback } from "react";
import { apiRequestProducts } from "./service/serviceRequestProducts";
import CircularProgress from "@material-ui/core/CircularProgress";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./pages/auth/protected-route";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Home from "./pages/home/HomeView";
import Navbar from "./components/navbar/Navbar";
import ProductsList from "./pages/products-admin/ProductsListAdmin";
import ProductDetails from "./pages/product-details/ProductDetails";
import AddProduct from "./pages/products-admin/AddProduct";
import EditProduct from "./pages/products-admin/EditProduct";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/profile/Profile";
import MyData from "./pages/profile/MyData";
import EditProfile from "./pages/profile/EditProfile";
import MyOrders from "./pages/profile/MyOrders";
import Order from "./pages/order/Order";
import OrderDetails from "./pages/order/OrderDetails";
import Products from "./pages/products-categories-catalog/Products";
import { StyledPageContainer, StyledContentWrap } from "./App-Styled";
import GlobalStyles from "./GlobalStyles";
import theme from "./Theme";
import { ThemeProvider } from "@material-ui/styles";
import { CartProvider } from "./contexts/CartContext";
import service from "./service/service";

function App() {
  const [loggedUser, setLoggedUser] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [listOfProducts, setListOfProducts] = React.useState([]);
console.log(loggedUser)
  //const service = new AuthService();

  const fetchUser = useCallback(() => {
    if (loggedUser === null) {
      service
        .loggedin()
        .then((response) => {
          setLoggedUser(response);
        })
        .catch(() => {
          setLoggedUser(false);
        });
    }
  }, [loggedUser]);

  const getTheUser = (userObj) => {
    setLoggedUser(userObj);
    console.log(loggedUser);
  };

  const getAllProducts = async () => {
    try {
      setIsLoading(true);
      const products = await apiRequestProducts();
      setListOfProducts(products);
    } catch (error) {
      console.error("Erro setando estado:", error);
    } finally {
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    getAllProducts();
  }, []);

  React.useEffect(() => {
    console.log("entrou fetch user");
    fetchUser();
  }, [fetchUser]);
  //sessionStorageUser();
  //sessionStorageCart();
  //sessionStorageTotalPrice();

  if (!isLoading) {
    return (
      <CartProvider>
        <StyledPageContainer>
          <BrowserRouter>
            <Navbar />

            <GlobalStyles />
            <Switch>
              <StyledContentWrap>
                <ProtectedRoute
                  loggedInUser={loggedUser}
                  listOfProducts={listOfProducts}
                  //deleteProduct={deleteProduct}
                  path="/list-admin"
                  component={ProductsList}
                  P
                />
                <ProtectedRoute
                  component={Profile}
                  loggedInUser={loggedUser}
                  path="/profile"
                  getUser={getTheUser}
                />
                <ProtectedRoute
                  component={AddProduct}
                  path="/add-product"
                  loggedInUser={loggedUser}
                />
                <ProtectedRoute
                  component={Order}
                  path="/order"
                  loggedInUser={loggedUser}
                />
                <ProtectedRoute
                  component={OrderDetails}
                  path="/order-details"
                  loggedInUser={loggedUser}
                />
                <ProtectedRoute
                  component={MyOrders}
                  loggedInUser={loggedUser}
                  path="/my-orders/:id"
                />
                <ProtectedRoute
                  component={MyData}
                  loggedInUser={loggedUser}
                  path="/my-data"
                />
                <Route
                  exact
                  path="/edit-profile/:id"
                  render={(props) => (
                    <EditProfile {...props} loggedInUser={loggedUser} />
                  )}
                />
                <Route exact path="/edit-product/:id" component={EditProduct} />
                <Route exact path="/products/:id" component={ProductDetails} />
                <Route exact path="/cart" component={Cart} />
                <Route
                  exact
                  path="/login"
                  component={Login}
                  getUser={getTheUser}
                />
                <Route
                  exact
                  path="/signup"
                  render={(props) => <Signup {...props} getUser={getTheUser} />}
                />
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Home {...props} listOfProducts={listOfProducts} />
                  )}
                />
                <Route
                  exact
                  path="/catalog"
                  render={(props) => (
                    <Products {...props} listOfProducts={listOfProducts} />
                  )}
                />
                <Route
                  exact
                  path="/bath"
                  render={(props) => (
                    <Products
                      {...props}
                      listOfProducts={listOfProducts.filter(
                        (product) => product.type === "Higiene"
                      )}
                    />
                  )}
                />
                <Route
                  exact
                  path="/body"
                  render={(props) => (
                    <Products
                      {...props}
                      listOfProducts={listOfProducts.filter(
                        (product) => product.type === "Corpo"
                      )}
                    />
                  )}
                />
                <Route
                  exact
                  path="/face"
                  render={(props) => (
                    <Products
                      {...props}
                      listOfProducts={listOfProducts.filter(
                        (product) => product.type === "Rosto"
                      )}
                    />
                  )}
                />
                <Route
                  exact
                  path="/perfumes"
                  render={(props) => (
                    <Products
                      {...props}
                      listOfProducts={listOfProducts.filter(
                        (product) => product.type === "Perfumes"
                      )}
                    />
                  )}
                />
                <Route
                  exact
                  path="/makeup"
                  render={(props) => (
                    <Products
                      {...props}
                      listOfProducts={listOfProducts.filter(
                        (product) => product.type === "Maquiagem"
                      )}
                    />
                  )}
                />
                <Route
                  exact
                  path="/hair"
                  render={(props) => (
                    <Products
                      {...props}
                      listOfProducts={listOfProducts.filter(
                        (product) => product.type === "Cabelos"
                      )}
                    />
                  )}
                />
              </StyledContentWrap>
            </Switch>
          </BrowserRouter>
        </StyledPageContainer>
      </CartProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <StyledPageContainer>
          <CircularProgress color="primary" />
        </StyledPageContainer>
      </ThemeProvider>
    );
  }
}

export default App;
