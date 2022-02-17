import React, { Component, useContext } from "react";
import CardProduct from "../../components/products-card/CardProduct";
import Footer from "../../components/footer/Footer";
import { StyledDisplay } from "../../styles-catalog";
import Box from "@material-ui/core/Box";

const Products = ({ listOfProducts }) => {
  return (
    <React.Fragment>
      <StyledDisplay>
        <Box
          display="flex"
          flexWrap="wrap"
          width="80%"
          flexDirection="row"
          justifyContent="flex-start"
        >
          {listOfProducts.map((product) => {
            return <CardProduct product={product} key={product._id} />;
          })}
        </Box>
      </StyledDisplay>
      <Footer />
    </React.Fragment>
  );
};

export default Products;
