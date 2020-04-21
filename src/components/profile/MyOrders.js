import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { StyledDisplay, StyledTextAccount } from '../auth/style';
import { OrdersList, CardMyOrder, CardContainer, OrdersImages, OrdersStatusColumn, OrdersInfoColumn, OrdersImagesColumn } from './styles'


class MyOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myOrders: []
        }
    }

    getMyOrders = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/my-orders/${this.props.loggedInUser._id}`)
            .then(response => {
                this.setState({ myOrders: response.data })

            })
            .catch(error => {
                console.log(error)
            })

    }
    componentDidMount() {
        this.getMyOrders();

    }

    render() {
        if (this.state.myOrders.length) {
            return (
                <StyledDisplay>
                    <StyledTextAccount>MEUS PEDIDOS</StyledTextAccount>
                    <OrdersList>
                        {this.state.myOrders.map(order => {
                            return (
                                <CardMyOrder key={order._id}>
                                    <CardContainer >
                                        <OrdersImagesColumn>
                                            {order.products.map(product => {
                                                return (
                                                    <OrdersImages key={product.id}>
                                                        <Link to={`/products/${product.id}`}>
                                                            <img src={product.image} alt={product.name && product.brand}></img>
                                                        </Link>
                                                    </OrdersImages>
                                                )
                                            })}
                                        </OrdersImagesColumn>
                                        <OrdersStatusColumn>
                                            <p>Status: Aguardando pagamento</p>
                                        </OrdersStatusColumn>
                                        <OrdersInfoColumn>
                                            <p>Preço total: R${parseFloat(order.priceWithDelivery).toFixed(2).replace('.', ',')}</p>
                                            <p>Tipo de entrega: {order.typeOfDelivery}</p>
                                            <p>Data da compra:<Moment format="DD/MM/YYYY">{order.created}</Moment></p>
                                        </OrdersInfoColumn>
                                    </CardContainer>
                                </CardMyOrder>
                            )
                        })}
                    </OrdersList>
                </StyledDisplay>
            )
        } else {
            return (
                <StyledDisplay>
                    <h3>Carregando</h3>
                </StyledDisplay>
            )
        }
    }
}

export default MyOrders;