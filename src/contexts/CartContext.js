import React, { useCallback } from "react";

export const CartContext = React.createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const addToCart = React.useCallback(
    (product) => {
      let itemInTheCart = cart.find((element) => {
        return element._id === product._id;
      });
      if (!itemInTheCart) {
        let productWithQuantity = product;
        productWithQuantity.quantity = 1;
        setCart(cart.concat(product));
      } else {
        return alert("Você já adicionou este item ao carrinho :)");
      }
    },
    [cart]
  );

  const removeFromCart = async (productId) => {
    const newCart = [...cart];
    let item = newCart.findIndex((element) => {
      return element._id === productId;
    });
    newCart.splice(item, 1);
    setCart(newCart);
  };

  const removeProduct = (productId) => {
    let newCart = [...cart];
    let item = newCart.find((element) => {
      return element._id === productId;
    });
    if (item.quantity === 1) {
      return item.quantity;
    } else {
      return (item.quantity -= 1);
    }
  };

  const addProduct = React.useCallback(
    (productId) => {
      let newCart = [...cart];
      let item = newCart.find((element) => {
        return element._id === productId;
      });
      if (item.quantity < 15) {
        item.quantity += 1;
        setCart(newCart);
      }
    },
    [cart]
  );

  const getTotalPrice = useCallback(
    (cartItems) => {
      let price = 0;
      if (cart.length >= 1) {
        cartItems.forEach((product) => {
          price = price + product.price * product.quantity;
        });
      }
      setTotalPrice(price);
    },
    [cart.length]
  );

  const emptyCart = () => {
    setCart([]);
  };

  React.useEffect(() => {
    getTotalPrice(cart);
  }, [cart, getTotalPrice]);

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrice,
        getTotalPrice,
        addToCart,
        addProduct,
        removeProduct,
        removeFromCart,
        emptyCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
