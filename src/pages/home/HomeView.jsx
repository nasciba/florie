import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CardProduct from "../../components/products-card/CardProduct.js";
import CardProductCategory from "./components/card-product-category/CardProductCategory";
import Footer from "../../components/footer/Footer";
import {
  StyledDisplay,
  StyledTitle,
  StyledHeader,
  StyledSection,
  StyledProductsContainer,
  StyledBox,
} from "./styles";
import { HIGHLIGHTED_PRODUCTS_IDS } from "../../constants.js";
import { CartContext } from "../../contexts/CartContext.js";

const HomeView = ({ listOfProducts }) => {
  const highlightedProducts = HIGHLIGHTED_PRODUCTS_IDS;
  const { addToCart } = useContext(CartContext);

  return (
    <React.Fragment>
      <StyledDisplay>
        <StyledHeader>
          <StyledBox>
            <Link to="/catalog">
              <p>
                os melhores cosméticos <br /> <span>orgânicos</span> e{" "}
                <span>veganos</span>
              </p>
            </Link>
          </StyledBox>
        </StyledHeader>
        <StyledSection>
          <StyledTitle>
            <span>DESTAQUES</span>
          </StyledTitle>
          <StyledProductsContainer>
            {listOfProducts
              ?.filter((product) => {
                return highlightedProducts.includes(product._id);
              })
              .map((productFound) => {
                return (
                  <CardProduct
                    product={productFound}
                    addItemToCart={addToCart}
                    key={productFound._id}
                  />
                );
              })}
          </StyledProductsContainer>
        </StyledSection>
        <StyledSection>
          <StyledTitle>
            <span>CATEGORIAS</span>
          </StyledTitle>
          <StyledProductsContainer>
            {/*  <CardProductCategory
              title="COLÔNIAS E AROMATERAPIA"
              link="/perfumes"
              imgSrc="../card-product-category/images/perfume3.jpg"
            /> */}
            {/*             <CardProductCategory
              title="CABELOS"
              link="/hair"
              imgSrc="../images/cachos.jpg"
            />
            <CardProductCategory
              title="CORPO"
              link="/body"
              imgSrc="../images/corpo"
            />
            <CardProductCategory
              title="MAQUIAGEM"
              link="/makeup"
            imgSrc="../images/maquiagem_batom_laranja.jpg"
            />
            <CardProductCategory
              title="HIGIENE"
              link="/bath"
              imgSrc="../images/banho.jpg"
            />
            <CardProductCategory
              title="ROSTO"
              link="/face"
              imgSrc="../../../images/rosto.jpg"
            /> */}
          </StyledProductsContainer>
        </StyledSection>
      </StyledDisplay>
      <Footer />
    </React.Fragment>
  );
};

export default HomeView;
