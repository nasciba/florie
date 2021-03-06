import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { StyledGreenButton } from '../buttons/styles';
import {
    StyledColumn,
    StyledSubtitle,
    Card,
    CardImage,
    CardText,
    CardDelivery,
    BoxCard
} from './styles'

import {
    StyledTitle,
    StyledContainer,
    StyledDisplayFlexRow
} from '../GlobalStyles'

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUser: this.props.loggedInUser,
            cart: this.props.rest.cart,
            totalPrice: this.props.rest.totalPrice,
            priceWithDelivery: 0,
            typeOfDelivery: ''
        };

    }

    handleChange = async (event) => {
        const { name, value } = event.target;
        await this.setState({ [name]: value });
        this.calculatePriceWithDelivery()
    }

    calculatePriceWithDelivery = () => {
        let totalWithDelivery = 0;
        let priceCart = this.state.totalPrice

        if (this.state.typeOfDelivery === 'Expressa') {
            totalWithDelivery = 21.90 + priceCart;
        }
        else if (this.state.typeOfDelivery === 'Padrão') {
            totalWithDelivery = 14.90 + priceCart;
        }
        else {
            totalWithDelivery = priceCart
        }
        this.setState({ priceWithDelivery: totalWithDelivery });
    }

    handleSubmit = (event) => {
        const products = this.props.rest.cart;
        const totalPrice = this.props.rest.totalPrice;
        const typeOfDelivery = this.state.typeOfDelivery;
        const priceWithDelivery = this.state.priceWithDelivery;
        axios.post(`${process.env.REACT_APP_API_URL}/api/order`, { products, totalPrice, priceWithDelivery, typeOfDelivery }, { withCredentials: true })
            .then(() => {
                this.props.history.push('/order-details')
                sessionStorage.clear();
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.calculatePriceWithDelivery();
    }

    render() {
        return (
            <StyledContainer>
                <StyledTitle>RESUMO DO PEDIDO </StyledTitle>
                <StyledDisplayFlexRow>
                    <StyledColumn>
                        <StyledSubtitle>PRODUTOS SELECIONADOS</StyledSubtitle>
                        {this.props.rest.cart.map((product) => {
                            return (
                                <BoxCard key={product.id}>
                                    <Card>
                                        <CardImage>
                                            <Link to={`/products/${product.id}`}>
                                                <img src={product.image} alt={product.name && product.brand}></img>
                                            </Link>
                                        </CardImage>
                                        <CardText>
                                            <p style={{ fontWeight: 'bold' }}>{product.name}</p>
                                            <p>Quantidade: {product.quantity}</p>
                                            <p>R${parseFloat(product.price).toFixed(2).replace('.', ',')}</p>
                                        </CardText>
                                    </Card>
                                </BoxCard>
                            )
                        })}
                    </StyledColumn>
                    <StyledColumn>
                        <StyledSubtitle>FRETE</StyledSubtitle>
                        <CardDelivery>
                            <form>
                                <label>
                                    <input type="radio" onChange={this.handleChange} name="typeOfDelivery" value="Padrão" required />
                                         Padrão: R$14,90 (5 a 8 dias úteis)
                                    </label>
                                <label>
                                    <input type="radio" onChange={this.handleChange} name="typeOfDelivery" value="Expressa" />
                                         Expressa: R$21,90 (2 a 3 dias úteis)
                                    </label>
                            </form>
                            <h4>Subtotal: R${parseFloat(this.state.totalPrice).toFixed(2).replace('.', ',')}</h4>
                            <h4>Total:  R${parseFloat(this.state.priceWithDelivery).toFixed(2).replace('.', ',')}</h4>
                        </CardDelivery>
                        <StyledSubtitle>ENDEREÇO DE ENVIO</StyledSubtitle>
                        <CardDelivery>
                            <p>{this.props.loggedInUser.firstName} {this.props.loggedInUser.lastName} </p>
                            <p>{this.props.loggedInUser.address.street}, {this.props.loggedInUser.address.number} {this.props.loggedInUser.address.complement}</p>
                            <p>CEP:{this.props.loggedInUser.address.zipcode} | {this.props.loggedInUser.address.city} - {this.props.loggedInUser.address.state}</p>
                        </CardDelivery>
                        <StyledGreenButton type="submit" onClick={() => this.handleSubmit()}>FINALIZAR PEDIDO</StyledGreenButton>

                    </StyledColumn>

                </StyledDisplayFlexRow>
            </StyledContainer>
        )
    }
}

export default Order;