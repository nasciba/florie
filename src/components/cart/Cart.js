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
        };
    }

    getAllProducts = () => {
        axios.get('http://localhost:5000/api/products')
            .then(responseFromApi => {
                this.setState({
                    listOfProducts: responseFromApi.data
                }, () => this.getTotalPrice());
            })
    }

    getTotalPrice = () => {
        let prices = this.state.listOfProducts.filter(productInDB => this.props.itemsInTheCart.includes(productInDB._id)).reduce((acc, productInDB) => {
            return acc + productInDB.price
        }, 0)
        this.setState({ totalPrice: prices})

    }

    
    componentDidMount() {
        this.getAllProducts()
        console.log(this.props.itemsInTheCart)

    }


    render() {
        
        return (
            <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
            <StyledDisplay>
                {this.props.itemsInTheCart.length === 0 ? <h1>O seu carrinho está vazio!</h1> :
                    this.state.listOfProducts.length !== 0 ?
                        this.state.listOfProducts.filter(productInDB => this.props.itemsInTheCart.includes(productInDB._id))
                            .map(product => {
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
                                            R${product.price}
                                        </StyledPrice>
                                        <StyledGreenButton onClick={() => {this.props.deleteItem(product._id); this.getTotalPrice()}}>REMOVER</StyledGreenButton>
                                    </ StyledCardProduct>

                                )
                            })
                        : <h1>olarrrr</h1>
                }

            </StyledDisplay>
                <h3>PREÇO TOTAL: R${this.state.totalPrice}</h3>
                </div>
        )
    }
}


export default Cart