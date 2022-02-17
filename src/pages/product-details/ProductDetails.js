import React from "react";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import {
  StyledDisplay,
  StyledImgProduct,
  StyledProductDetails,
} from "./styles";
import { StyledGreenButton } from "../../components/buttons/styles";
import { CartContext } from "../../contexts/CartContext";

const ProductDetails = () => {
  const { addToCart } = React.useContext(CartContext);
  const [product, setProduct] = React.useState({});
  const { params } = this.props.match;

  const getSingleProduct = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/products/${params.id}`, {
        withCredentials: true,
      })
      .then((apiResponse) => {
        const singleProduct = apiResponse.data;
        return singleProduct;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getProduct = () => {
    try {
      const product = getSingleProduct();
      setProduct(product);
    } catch (error) {
      console.error(error);
    }
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
