import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../footer/Footer'
import { StyledDisplay, StyledImgProduct, StyledProductDetails } from './styles'
import { StyledGreenButton } from '../buttons/styles';

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
            <React.Fragment>
            <StyledDisplay>
                <StyledImgProduct>
                    <img src={this.state.imageUrl} alt={this.state.name && this.state.brand}></img>
                </StyledImgProduct>
                <StyledProductDetails>
                    <h4 style={{ textTransform: "uppercase"}}>{this.state.name}</h4>
                    <h5 style={{ color: "#808080", fontWeight: "bold" }}>{this.state.brand}</h5>
                    <h4>DESCRIÇÃO</h4>
                    <p>{this.state.description}</p>
                    <h3>R${parseFloat(this.state.price).toFixed(2).replace('.', ',')}</h3>
                    <StyledGreenButton onClick={() => { this.props.addItemToCart(this.state._id) }}>ADICIONAR AO CARRINHO</StyledGreenButton>
                </StyledProductDetails>

            </StyledDisplay>
            <Footer/>
            </React.Fragment>
        )
    }
}

export default ProductDetails;