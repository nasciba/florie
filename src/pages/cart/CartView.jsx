import React from "react";
import {
  FlexBox,
  FlexboxCardsandSubtotal,
  JustifyAlignCenter,
  StyledDisplayCart,
  StyledCardItem,
  StyledCardCart,
  StyledIconRemoveProduct,
  StyledImgCart,
  StyledEmptyCart,
  StyledH3,
  StyledH4,
  StyledQuantityBtn,
  StyledTextBox,
} from "./styles";
import { StyledGreenButton } from "../../components/buttons/styles";
import { StyledTitle } from "../products-categories-catalog/styles";
import { Link } from "react-router-dom";

const CartView = ({ cart, addProductQuantity, totalPrice, removeFromCart }) => {
  if (cart.length) {
    return (
      <StyledDisplayCart>
        <StyledTitle> Sacola de Compras </StyledTitle>
        <FlexboxCardsandSubtotal>
          <FlexBox>
            {cart.map((product) => (
              <StyledCardItem key={product._id}>
                <StyledCardCart>
                  <StyledImgCart>
                    <Link to={`/products/${product._id}`}>
                      <img
                        src={product.imageUrl}
                        alt={product.name && product.brand}
                      ></img>
                    </Link>
                  </StyledImgCart>
                  <StyledTextBox>
                    <StyledH4>{product.brand}</StyledH4>
                    <span>{product.name}</span>
                    <span>
                      Preço: R$
                      {product.price.toFixed(2).replace(".", ",")}
                    </span>
                    <StyledQuantityBtn>
                      <i
                        className="fa fa-minus-square"
                        onClick={() => {
                          this.props.removeItem(product._id);
                        }}
                      ></i>
                      <span>{product.quantity}</span>
                      <i
                        className="fa fa-plus-square"
                        onClick={() => {
                          addProductQuantity(product._id);
                        }}
                      ></i>
                    </StyledQuantityBtn>
                    <StyledIconRemoveProduct>
                      <i
                        className="fa fa-trash"
                        onClick={() => {
                          removeFromCart(product.id);
                        }}
                      ></i>
                      <span>Remover do carrinho</span>
                    </StyledIconRemoveProduct>
                  </StyledTextBox>
                </StyledCardCart>
              </StyledCardItem>
            ))}
          </FlexBox>
          <FlexBox>
            <JustifyAlignCenter>
              <StyledH3>
                {" "}
                SUBTOTAL: R$
                {this.props.totalPrice.toFixed(2).replace(".", ",")}{" "}
              </StyledH3>
              <StyledGreenButton>
                {" "}
                <Link to="/order" style={{ textDecoration: "none" }}>
                  FECHAR PEDIDO
                </Link>
              </StyledGreenButton>
            </JustifyAlignCenter>
          </FlexBox>
        </FlexboxCardsandSubtotal>
      </StyledDisplayCart>
    );
  } else {
    return (
      <StyledEmptyCart>
        <h1>Sua sacola está vazia : (</h1>
        <img
          src={require("../../assets/shopping-basket.svg")}
          alt="ícone preto de um cesto de compras"
        ></img>
        <StyledGreenButton>
          <span>
            <Link to={"/catalog"}>COMPRAR</Link>
          </span>
        </StyledGreenButton>
      </StyledEmptyCart>
    );
  }
};

export default CartView;
