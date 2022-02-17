import React from "react";
import { StyledEmptyCart } from "./styles";
import { StyledGreenButton } from "../../components/buttons/styles";
import { Link } from "react-router-dom";

const EmptyCart = () => {
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
};

export default EmptyCart;
