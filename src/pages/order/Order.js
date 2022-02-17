import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { StyledGreenButton } from "../../components/buttons/styles";
import {
  StyledColumn,
  StyledSubtitle,
  Card,
  CardImage,
  CardText,
  CardDelivery,
  BoxCard,
} from "./styles";

import {
  StyledTitle,
  StyledContainer,
  StyledDisplayFlexRow,
} from "../../GlobalStyles";
import { CartContext } from "../../contexts/CartContext";
import { postOrder } from "./service";

const Order = (loggedInUser) => {
  const { firstName, lastName } = loggedInUser;
  const { street, number, complement, zipcode, city, state } =
    loggedInUser.address;

  const { cart, totalPrice, emptyCart } = React.useContext(CartContext);
  const [priceWithDelivery, setPriceWithDelivery] = React.useState(0);
  const [typeOfDelivery, setTypeOfDelivery] = React.useState("");
  const [error, setError] = React.useState(false);

  const EXPRESS_DELIVERY = 21.9;
  const STANDARD_DELIVERY = 14.9;

  const handleChange = (event) => {
    const { value } = event.target;
    setTypeOfDelivery(value);
  };

  const calculatePriceWithDelivery = useCallback(() => {
    let totalWithDelivery = 0;

    if (typeOfDelivery === "Expressa") {
      totalWithDelivery = EXPRESS_DELIVERY + totalPrice;
    } else if (typeOfDelivery === "Padrão") {
      totalWithDelivery = STANDARD_DELIVERY + totalPrice;
    } else {
      totalWithDelivery = totalPrice;
    }
    setPriceWithDelivery(totalWithDelivery);
  }, [totalPrice, typeOfDelivery]);

  const handleSubmit = async () => {
    try {
      await postOrder(cart, totalPrice, priceWithDelivery, typeOfDelivery);
      emptyCart();
      this.props.history.push("/order-details");
    } catch (error) {
      setError(true);
      throw error;
    }
  };

  const formatPrice = (totalPrice) => {
    const formattedPrice = parseFloat(totalPrice).toFixed(2).replace(".", ",");
    return formattedPrice;
  };

  React.useEffect(() => {
    calculatePriceWithDelivery();
  }, [typeOfDelivery, calculatePriceWithDelivery]);

  if (error) {
    return <h1>Houve um erro na requisição, atualize a página : (</h1>;
  } else {
    return (
      <StyledContainer>
        <StyledTitle>RESUMO DO PEDIDO </StyledTitle>
        <StyledDisplayFlexRow>
          <StyledColumn>
            <StyledSubtitle>PRODUTOS SELECIONADOS</StyledSubtitle>
            {cart.map((product) => {
              return (
                <BoxCard key={product.id}>
                  <Card>
                    <CardImage>
                      <Link to={`/products/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.name && product.brand}
                        ></img>
                      </Link>
                    </CardImage>
                    <CardText>
                      <p style={{ fontWeight: "bold" }}>{product.name}</p>
                      <p>Quantidade: {product.quantity}</p>
                      <p>
                        R$
                        {parseFloat(product.price).toFixed(2).replace(".", ",")}
                      </p>
                    </CardText>
                  </Card>
                </BoxCard>
              );
            })}
          </StyledColumn>
          <StyledColumn>
            <StyledSubtitle>FRETE</StyledSubtitle>
            <CardDelivery>
              <form>
                <label>
                  <input
                    type="radio"
                    onChange={handleChange}
                    name="typeOfDelivery"
                    value="Padrão"
                    required
                  />
                  Padrão: R$14,90 (5 a 8 dias úteis)
                </label>
                <label>
                  <input
                    type="radio"
                    onChange={handleChange}
                    name="typeOfDelivery"
                    value="Expressa"
                  />
                  Expressa: R$21,90 (2 a 3 dias úteis)
                </label>
              </form>
              <h4>
                Subtotal: R$
                {formatPrice(totalPrice)}
              </h4>
              <h4>
                Total: R$
                {formatPrice(priceWithDelivery)}
              </h4>
            </CardDelivery>
            <StyledSubtitle>ENDEREÇO DE ENVIO</StyledSubtitle>
            <CardDelivery>
              <p>
                {firstName} {lastName}{" "}
              </p>
              <p>
                {street}, {number} {complement}
              </p>
              <p>
                CEP:{zipcode} | {city} - {state}
              </p>
            </CardDelivery>
            <StyledGreenButton type="submit" onClick={() => handleSubmit()}>
              FINALIZAR PEDIDO
            </StyledGreenButton>
          </StyledColumn>
        </StyledDisplayFlexRow>
      </StyledContainer>
    );
  }
};

export default Order;
