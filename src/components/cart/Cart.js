import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
    StyledDisplay, StyledCardProduct, StyledTextTitle, StyledTextBrand, StyledPrice, StyledMessage
} from '../home/styles'
import { StyledGreenButton } from '../buttons/styles';


class Cart extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            listOfProducts: [],
            cart: this.props.itemsInTheCart,
            totalPrice: 0,
            value: ''
        };
    }

    getAllProducts = () => {
        console.log('oi Amanda ihullll turupom pom?')
        axios.get('http://localhost:5000/api/products')
            .then(responseFromApi => {
                let response = responseFromApi.data.filter(productInDB => {
                    if (this.props.itemsInTheCart.find(element => {
                        return element.id === productInDB._id
                    }) !== undefined) {
                        return true;
                    }
                    return false;
                }
                );
                this.setState({
                    listOfProducts: response
                });
                this.getTotalPrice()
            })
    }



    getTotalPrice = () => {
        let prices = this.state.listOfProducts.reduce((acc, productInDB) => {
            let index = this.props.itemsInTheCart.findIndex(element => {
                return element.id === productInDB._id
            });
            return acc = acc + (productInDB.price * this.props.itemsInTheCart[index].quantity)

        }, 0)
        this.setState({ totalPrice: prices })

    }

    handleChange = (event) => {
        console.log(event.target.value)
    }

    componentDidMount() {
        this.getAllProducts()
        console.log(this.props.itemsInTheCart)

    }


    render() {

        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <StyledDisplay>
                    {this.props.itemsInTheCart.length === 0 ? <h1>O seu carrinho está vazio!</h1> :
                        this.state.listOfProducts.length !== 0 ?
                            this.state.listOfProducts.map((product, index) => {
                                let indexInCart = this.props.itemsInTheCart.findIndex(item => item.id === product._id); 
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
                                            R${(product.price).toFixed(2)}
                                        </StyledPrice>
                                        <button onClick={() => { this.props.addItem(product._id) }}>+</button>
                                        <label>{this.props.itemsInTheCart[indexInCart].quantity}</label>
                                        <button onClick={() => { this.props.removeItem(product._id) }}>-</button>

                                        <StyledGreenButton onClick={() => { this.props.deleteItem(product._id); this.getAllProducts() }}>REMOVER</StyledGreenButton>
                                    </ StyledCardProduct>

                                )
                            })
                            : <h1>olarrrr</h1>
                    }

                </StyledDisplay>
                {this.props.itemsInTheCart.length ? <h3> PREÇO TOTAL: R${(this.state.totalPrice).toFixed(2)} </h3> : null}

            </div>
        )
    }
}


export default Cart