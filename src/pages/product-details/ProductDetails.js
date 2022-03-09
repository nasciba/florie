import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import {
  StyledDisplay,
  StyledImgProduct,
  StyledProductDetails,
} from "./styles";
import { StyledGreenButton } from "../../components/buttons/styles";
import { CartContext } from "../../contexts/CartContext";
import getSingleProduct from "../../service/getSingleProduct";

const ProductDetails = () => {
  const { addToCart } = React.useContext(CartContext);
  const [product, setProduct] = React.useState({});
  const { pathname } = useLocation();

 

  const getProduct = async () => {
    const product = await getSingleProduct(pathname);
    setProduct(product);
  };

  React.useEffect(() => {
    getProduct();
  });

  return (
    <React.Fragment>
      <StyledDisplay>
        <StyledImgProduct>
          <img src={product.imageUrl} alt={product.name && product.brand}></img>
        </StyledImgProduct>
        <StyledProductDetails>
          <h4 style={{ textTransform: "uppercase" }}>{product.name}</h4>
          <h5 style={{ color: "#808080", fontWeight: "bold" }}>
            {product.brand}
          </h5>
          <h4>DESCRIÇÃO</h4>
          <p>{product.description}</p>
          <h3>R${parseFloat(product.price).toFixed(2).replace(".", ",")}</h3>
          <StyledGreenButton
            onClick={() => {
              addToCart(product._id);
            }}
          >
            ADICIONAR AO CARRINHO
          </StyledGreenButton>
        </StyledProductDetails>
      </StyledDisplay>
      <Footer />
    </React.Fragment>
  );
};

export default ProductDetails;
