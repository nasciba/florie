import React, { Component } from 'react';
import axios from 'axios';
import { StyledDisplay, StyledImgProduct, StyledProdDetailsDescrip } from './styles'
import { StyledGreenButton } from '../buttons/styles';

class ProductDetails extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};

    // }
    componentDidMount() {
        this.getSingleProduct();
    }

    getSingleProduct = () => {
        const { params } = this.props.match;

        axios.get(`${process.env.REACT_APP_API_URL}/api/products/${params.id}`, { withCredentials: true })
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
                <StyledProdDetailsDescrip>
                    <p style={{ textTransform: "uppercase", fontWeight: "bold" }}>{this.state.name}</p>
                    <p style={{ color: "#808080", fontWeight: "bold" }}>{this.state.brand}</p>
                    <h4>DESCRIÇÃO</h4>
                    <p>{this.state.description}</p>
                    <h3>R${parseFloat(this.state.price).toFixed(2).replace('.', ',')}</h3>
                    <StyledGreenButton onClick={() => { this.props.addItemToCart(this.state._id) }}>ADICIONAR AO CARRINHO</StyledGreenButton>
                </StyledProdDetailsDescrip>

            </StyledDisplay>

        )
    }
}

export default ProductDetails;