import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { StyledDisplay, StyledTitle, StyledImgProduct, StyledProdDetailsDescrip, StyledDetailsText } from './styles'
import { StyledGreenButton } from '../buttons/styles';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // cart: {},
        };
        
    }
    componentDidMount() {
        console.log("aqui as props", this.props);
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
    // addToCart = (e) => {
    //     const { params } = this.props.match;
    //     let cart = this.state.cart
    //     cart[params.id] = cart[params.id] !== undefined ? cart[params.id]+1 : 1;
    //     console.log("aqui", cart)
    //     this.setState({ cart: cart })
    //     console.log(this.state);
    // }

    render() {
        return (
            <StyledDisplay>
                <StyledImgProduct>
                    <img src={this.state.imageUrl} alt={this.state.name && this.state.brand}></img>
                </StyledImgProduct>
                <StyledProdDetailsDescrip>
                    <p style={{ textTransform: "uppercase", fontWeight: "bold" }}>{this.state.name}</p>
                    <p style={{ color: "#808080" }}>{this.state.brand}</p>

                    <h1>R${this.state.price}</h1>
                    <StyledGreenButton onClick={this.props.addItemToCart}>ADICIONAR AO CARRINHO</StyledGreenButton>
                </StyledProdDetailsDescrip>
               
                <StyledDetailsText>
                <StyledTitle>Descrição do Produto</StyledTitle>
                    {this.state.description}
                </StyledDetailsText>
            </StyledDisplay >
        )
    }
}

export default ProductDetails;