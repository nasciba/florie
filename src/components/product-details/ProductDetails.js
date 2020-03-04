import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { StyledDisplay, StyledImgProduct, StyledProdDetailsText } from './styles'
import { StyledGreenButton } from '../green-button/styles';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        
    }
    componentDidMount() {
        this.getSingleProduct();
    }

    getSingleProduct = () => {
        const { params } = this.props.match;

        axios.get(`http://localhost:5000/api/products/${params.id}`, { withCredentials: true })
            .then(apiResponse => {
                const singleProduct = apiResponse.data;
                this.setState(singleProduct);
            })
            .catch((err) => {
                console.log(err)
            })
    }


    render() {
        return (
            <StyledDisplay>
                <StyledImgProduct>
                    <img src={this.state.imageUrl} alt={this.state.name && this.state.brand}></img>
                </StyledImgProduct>
                <StyledProdDetailsText>
                    <p style={{ textTransform: "uppercase", fontWeight: "bold" }}>{this.state.name}</p>
                    <p style={{ color: "#808080" }}>{this.state.brand}</p>
                    <p>{this.state.description}</p>
                    <h1>R${this.state.price}</h1>
                    <StyledGreenButton>ADICIONAR AO CARRINHO</StyledGreenButton>
                    {/* <Link to={'/products'}>Lista de produtos</Link> */}
                </StyledProdDetailsText>
            </StyledDisplay>
        )
    }
}

export default ProductDetails;