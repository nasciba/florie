import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    StyledDisplay, StyledCardProduct, StyledTextTitle, StyledTextBrand, StyledPrice, StyledMessage
} from '../catalog-all-products/styles';
import { StyledTitle } from './styles'
import { StyledGreenButton } from '../buttons/styles';

export default class Categories extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('aqui as props', this.props);

    }

    render() {
        return (
           
              <StyledDisplay>
                <StyledTitle style={{width:'80%'}}><span>{this.props.categorizedProducts[0].type}</span></StyledTitle>
                {this.props.categorizedProducts.map(filteredProduct => {
                  return (
                    <StyledCardProduct key={filteredProduct._id}>
                      <Link to={`/products/${filteredProduct._id}`}>
                        <img src={filteredProduct.imageUrl} alt={filteredProduct.title && filteredProduct.brand}></img>
                      </Link>
                      <StyledTextTitle>{filteredProduct.name}</StyledTextTitle>
                      <StyledTextBrand>
                        {filteredProduct.brand}
                      </StyledTextBrand>
                      <StyledPrice>
                        R${parseFloat(filteredProduct.price).toFixed(2).replace('.', ',')}
                      </StyledPrice>
                      <StyledGreenButton onClick={() => { this.props.addItemToCart(filteredProduct._id) }}>ADICIONAR AO CARRINHO</StyledGreenButton>
                      {filteredProduct.stock <= 5 && filteredProduct.stock >= 2 ? <StyledMessage> Últimas {filteredProduct.stock} unidades   </StyledMessage> : null}
                      {filteredProduct.stock === 1 ? <StyledMessage> Última unidade!   </StyledMessage> : null}
                    </ StyledCardProduct>

                  )
                })
                }

              </StyledDisplay>
        )
    }
}

