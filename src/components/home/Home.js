import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { StyledCardProduct, StyledTextTitle, StyledTextProduct } from './styles'
import { StyledDisplay } from '../styles'

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
                            <StyledTextProduct>
                                {product.brand}
                                <br></br>
                                R${product.price}
                                <br></br>
                                {product.stock <= 5 && product.stock >= 2 ? <h6> Últimas {product.stock} unidades </h6> : null}
                                {product.stock === 1 ? <p> Última unidade! </p> : null}
                            </StyledTextProduct>
                        </ StyledCardProduct>

                    )
                })}

            </StyledDisplay>
        )

    }
}

export default Home;