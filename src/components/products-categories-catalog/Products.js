import React, { Component } from 'react'
import CardProduct from '../products-card/CardProduct'
import Footer from '../footer/Footer'
import { StyledTitle } from './styles';
import { StyledDisplay } from '../../styles-catalog';

export default class Products extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <React.Fragment>
      <StyledDisplay>
        {this.props.history.location.pathname === '/catalog' ?
          <StyledTitle style={{ width: '80%' }}><span>CATÁLOGO</span></StyledTitle> :
          <StyledTitle style={{ width: '80%' }}><span>{this.props.listOfProducts[0].type}</span></StyledTitle>}
        {this.props.listOfProducts.map(product => {
          return (
            <CardProduct product={product} addItemToCart={this.props.addItemToCart} key={product._id} />
          )
        })
        }
      </StyledDisplay>
      <Footer/>
      </React.Fragment>
    )
  }
}

