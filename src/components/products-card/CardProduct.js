import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  StyledCardProduct,
  StyledTextTitle,
  StyledTextBrand,
  StyledPrice,
  StyledMessage,
} from "./styles";
import { StyledGreenButton } from "../buttons/styles";
import { CartContext } from "../../contexts/CartContext";

const CardProduct = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <StyledCardProduct>
      <Link to={`/products/${product._id}`}>
        <img src={product.imageUrl} alt={product.title && product.brand}></img>
      </Link>
      <StyledTextTitle>{product.name}</StyledTextTitle>
      <StyledTextBrand>{product.brand}</StyledTextBrand>
      <StyledPrice>
        R${parseFloat(product.price).toFixed(2).replace(".", ",")}
      </StyledPrice>
      <StyledGreenButton
        onClick={() => {
          addToCart(product);
        }}
      >
        COMPRAR
      </StyledGreenButton>
      {product.stock <= 5 && product.stock >= 2 ? (
        <StyledMessage> Últimas {product.stock} unidades </StyledMessage>
      ) : null}
      {product.stock === 1 ? (
        <StyledMessage> Última unidade! </StyledMessage>
      ) : null}
    </StyledCardProduct>
  );
};

export default CardProduct;
