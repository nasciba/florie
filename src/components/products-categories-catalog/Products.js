import React, { Component } from "react";
import CardProduct from "../products-card/CardProduct";
import Footer from "../footer/Footer";
import { StyledDisplay } from "../../styles-catalog";
import Box from "@material-ui/core/Box";

export default class Products extends Component {
  render() {
    return (
      <React.Fragment>
        <StyledDisplay>
          <Box display='flex' flexWrap='wrap' width='80%' flexDirection='row' justifyContent='flex-start'>
            {this.props.listOfProducts.map((product) => {
              return (
                <CardProduct
                  product={product}
                  addItemToCart={this.props.addItemToCart}
                  key={product._id}
                />
              );
            })}
          </Box>
        </StyledDisplay>
        <Footer />
      </React.Fragment>
    );
  }
}
