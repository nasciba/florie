import React, { Component } from 'react';
import { StyledDisplay, StyledInputAuth, StyledTextAccount } from '../auth/style';
import { StyledGreenButton } from '../buttons/styles';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { StyledDisplayCart, StyledBoxCard, StyledCardCart, StyledTextBox, StyledProductQtyBtn, StyledImgCart } from '../cart/styles'


class Order extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedInUser: null };

    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    componentDidMount() {
        console.log('aqui as props', this.props)
        console.log("entrou no order");
    }

    handleSubmit = (event) => {
        // event.preventDefault();
        const products = this.props.rest.cart;
        console.log(products)
        const totalPrice = this.props.rest.totalPrice
        // const client = this.props.loggedInUser._id
        console.log(totalPrice)
        // console.log(client)
        axios.post(`${process.env.REACT_APP_API_URL}/api/order`, { products, totalPrice }, { withCredentials: true })
            .then(() => {
                // this.props.getData(); c
                console.log('deu certo')
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <StyledDisplay>
                <StyledInputAuth>
                    <StyledTextAccount>RESUMO DO PEDIDO</StyledTextAccount>

                    <h2>Produtos selecionados</h2>

                    {this.props.rest.cart.map((product) => {
                        return (
                            <StyledBoxCard key={product.id}>
                                <StyledCardCart >
                                    <StyledImgCart>
                                        <Link to={`/products/${product.id}`}>
                                            <img src={product.image} alt={product.name && product.brand}></img>
                                        </Link>
                                    </StyledImgCart>
                                    <StyledTextBox>
                                        <h3>{product.name}</h3>
                                        <h3 style={{ color: 'gray' }}>{product.brand}</h3>

                                        <h3>R${parseFloat(product.price).toFixed(2).replace('.', ',')}</h3>

                                    </StyledTextBox>
                                </StyledCardCart>
                            </StyledBoxCard>

                        )
                    })}

                    <StyledGreenButton type="submit" onClick={() => this.handleSubmit()}>PAGAR</StyledGreenButton>

                </StyledInputAuth>
            </StyledDisplay>)
    }
}


export default Order;