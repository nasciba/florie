import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    StyledDisplay, StyledCardProduct, StyledTextTitle, StyledTextBrand, StyledPrice, StyledMessage
} from './styles'
import { StyledGreenButton } from '../buttons/styles';
import { StyledTitle } from '../products-categories/styles'


class Catalog extends Component {
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
                <StyledTitle style={{width:'80%'}}><span>CATÁLOGO</span></StyledTitle>
                {this.state.listOfProducts.map(product => {
                    return (
                        <StyledCardProduct key={product._id}>
                            <Link to={`/products/${product._id}`}>
                                <img src={product.imageUrl} alt={product.title && product.brand}></img>
                            </Link>
                            <StyledTextTitle>{product.name}</StyledTextTitle>
                            <StyledTextBrand>
                                {product.brand}
                            </StyledTextBrand>
                            <StyledPrice>
                                R${parseFloat(product.price).toFixed(2).replace('.', ',')}
                            </StyledPrice>
                            <StyledGreenButton onClick={() => { this.props.addItemToCart(product._id) }}>ADICIONAR AO CARRINHO</StyledGreenButton>
                            {product.stock <= 5 && product.stock >= 2 ? <StyledMessage> Últimas {product.stock} unidades   </StyledMessage> : null}
                            {product.stock === 1 ? <StyledMessage> Última unidade!   </StyledMessage> : null}
                        </ StyledCardProduct>

                    )
                })}

            </StyledDisplay>
        )
    }
}

export default Catalog;