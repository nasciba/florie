import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    StyledCardProduct, StyledTextTitle, StyledTextBrand, StyledPrice, StyledMessage
} from './styles';
import { StyledGreenButton } from '../buttons/styles';


class CardProduct extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <StyledCardProduct>
                <Link to={`/products/${this.props.product._id}`}>
                    <img src={this.props.product.imageUrl} alt={this.props.product.title && this.props.product.brand}></img>
                </Link>
                <StyledTextTitle>{this.props.product.name}</StyledTextTitle>
                <StyledTextBrand>
                    {this.props.product.brand}
                </StyledTextBrand>
                <StyledPrice>
                    R${parseFloat(this.props.product.price).toFixed(2).replace('.', ',')}
                </StyledPrice>
                <StyledGreenButton onClick={() => { this.props.addItemToCart(this.props.product._id) }}>ADICIONAR AO CARRINHO</StyledGreenButton>
                {this.props.product.stock <= 5 && this.props.product.stock >= 2 ? <StyledMessage> Últimas {this.props.product.stock} unidades   </StyledMessage> : null}
                {this.props.product.stock === 1 ? <StyledMessage> Última unidade!   </StyledMessage> : null}
            </ StyledCardProduct>
        )
    }
}


export default CardProduct;