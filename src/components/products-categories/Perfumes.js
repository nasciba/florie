import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { StyledTitle } from './styles'
import {
  StyledDisplay, StyledCardProduct, StyledTextTitle, StyledTextBrand, StyledPrice, StyledMessage
} from '../catalog-all-products/styles';
import { StyledGreenButton } from '../buttons/styles';

export default class Perfumes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfProducts: [],
    }
  }


  getAllProducts = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/products`)
      .then(responseFromApi => {
        this.setState({
          listOfProducts: responseFromApi.data
        })
      })
  }

  componentDidMount() {
    this.getAllProducts();
  }

  render() {
    return (
      <StyledDisplay>
        <StyledTitle><span>COLÔNIAS E PERFUMARIA</span></StyledTitle>
        {this.state.listOfProducts.filter(product => {
          return product.type === "Perfumes"
        }).map(filteredProduct => {
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
