import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    StyledDisplay, StyledCardProduct, StyledTextTitle, StyledTextBrand,
    StyledPrice, StyledMessage
} from './styles'
// import { Button } from '../green-button/Button';
import { StyledGreenButton } from '../green-button/styles';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            listOfProducts: [],
        }
    }

    getAllProducts = () => {
        axios.get('http://localhost:5000/api/products')
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
                                R${product.price}
                            </StyledPrice>
                            <StyledGreenButton>ADICIONAR AO CARRINHO</StyledGreenButton>
                            {product.stock <= 5 && product.stock >= 2 ? <StyledMessage> Últimas {product.stock} unidades   </StyledMessage> : null}
                            {product.stock === 1 ? <StyledMessage> Última unidade!   </StyledMessage> : null}
                        </ StyledCardProduct>

                    )
                })}

            </StyledDisplay>
        )

    }
}

export default Home;