import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { StyledGreenButton } from '../buttons/styles';
import {
    Display,
    Container,
    HalfScreenContainer,
    Title,
    Subtitle,
    Card,
    CardImage,
    CardText,
    CardDelivery,
    BoxCard
} from './styles'

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUser: null,
            cart: this.props.rest.cart
        };

    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        const products = this.props.rest.cart;
        const totalPrice = this.props.rest.totalPrice
        axios.post(`${process.env.REACT_APP_API_URL}/api/order`, { products, totalPrice }, { withCredentials: true })
            .then(() => {
                this.props.history.push('/order-details')
                sessionStorage.clear();
            })
            .catch(error => console.log(error))
    }
    
    componentDidMount() {
        console.log('aqui as props order', this.props)
    }

    render() {
        return (
            <Display>
                <Title><span>RESUMO DO PEDIDO </span></Title>
                <Container>
                    <HalfScreenContainer>

                        <Subtitle>PRODUTOS SELECIONADOS</Subtitle>

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
                    </HalfScreenContainer>
                    <HalfScreenContainer>
                        <Subtitle>ENDEREÇO DE ENVIO</Subtitle>
                        
                                <CardDelivery>
                                    <p>{this.props.loggedInUser.fullName}
                                        <br></br>
                                        {this.props.loggedInUser.address.street}, {this.props.loggedInUser.address.number} {this.props.loggedInUser.address.complement}
                                        <br></br>
                                        CEP:{this.props.loggedInUser.address.zipcode} | {this.props.loggedInUser.address.city} - {this.props.loggedInUser.address.state}
                                    </p>

                                </CardDelivery>
                          
                        <Subtitle>FRETE</Subtitle>
                       
                                <CardDelivery>
                                    <form>
                                        <div className="radio">
                                            <label>
                                                <input type="radio" value="standard" />
                                                Padrão: R$R$20,90 (5 a 8 dias úteis)
                                            </label>
                                        </div>
                                        <div className="radio">
                                            <label>
                                                <input type="radio" value="express" />
                                                Expressa: R$35,90 (2 a 3 dias úteis)
                                            </label>
                                        </div>
                                    </form>
                                </CardDelivery>
                        <StyledGreenButton type="submit" onClick={() => this.handleSubmit()}>FINALIZAR PEDIDO</StyledGreenButton>
                    </HalfScreenContainer>
                </Container>
            </Display>)
    }
}


export default Order;