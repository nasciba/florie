import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { StyledDisplayCart, StyledBoxCard, StyledCardCart, StyledTextBox, StyledProductQtyBtn, StyledImgCart } from './styles'
// import { StyledDisplay } from '../home/styles'
import { StyledGreenButton } from '../buttons/styles';


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfProducts: [],
            cart: this.props.itemsInTheCart,
            totalPrice: 0,
        };
    }

    // getAllProducts = () => {
    //     axios.get('http://localhost:5000/api/products')
    //         .then(responseFromApi => {
    //             let response = responseFromApi.data.filter(productInDB => {
    //                 if (this.props.itemsInTheCart.find(element => {
    //                     return element.id === productInDB._id
    //                 }) !== undefined) {
    //                     return true;
    //                 }
    //                 return false;
    //             }
    //             );
    //             this.setState({
    //                 listOfProducts: response
    //             });
    //             this.getTotalPrice()
    //         })
    // }

    // getTotalPrice = () => {
    //     let prices = this.state.listOfProducts.reduce((acc, productInDB) => {
    //         let index = this.props.itemsInTheCart.findIndex(element => {
    //             return element.id === productInDB._id
    //         });
    //         return acc = acc + (productInDB.price * this.props.itemsInTheCart[index].quantity)

    //     }, 0)
    //     this.setState({ totalPrice: prices })

    // }

    // componentDidMount() {
    //     this.getAllProducts()
    //     console.log(this.props.itemsInTheCart)

    // }


    render() {

        return (
            <div >
                <StyledDisplayCart>
                    {this.props.itemsInTheCart.length ? <h1>CARRINHO</h1> : null}

                    {this.props.itemsInTheCart.length === 0 ? <h1>O seu carrinho está vazio!</h1> :
                        
                            this.props.itemsInTheCart.map((product) => {
                                 console.log(product)
                                return (
                                    <StyledBoxCard>
                                        <StyledCardCart key={product.id}>
                                            <StyledImgCart>
                                                <Link to={`/products/${product.id}`}>
                                                    <img src={product.image} alt={product.name && product.brand}></img>
                                                </Link>
                                            </StyledImgCart>
                                            <StyledTextBox>
                                                <h3>{product.name}</h3>
                                                <h3 style={{color:'gray'}}>{product.brand}</h3>

                                            <h3>R${parseFloat(product.price).toFixed(2).replace('.', ',')}</h3>
                                                <StyledProductQtyBtn>
                                                    <i className="fa fa-minus-square" onClick={() => { this.props.removeItem(product.id) }}></i>
                                                     <label>{product.quantity}  </label>
                                                    <i className="fa fa-plus-square" onClick={() => { this.props.addItem(product.id) }}></i>
                                                </StyledProductQtyBtn>
                                                <StyledGreenButton onClick={() => { this.props.deleteItem(product._id) }}>REMOVER</StyledGreenButton>
                                            </StyledTextBox>
                                        </StyledCardCart>
                                    </StyledBoxCard>

                                )
                            })
                    }
                    {this.props.itemsInTheCart.length ? <h3> PREÇO TOTAL: R${parseFloat(this.props.totalPrice).toFixed(2).replace('.', ',')} </h3> : null}
                    {this.props.itemsInTheCart.length ? <StyledGreenButton> <Link to='/order' style={{ textDecoration: 'none', color: ' #26acb5' }}>FECHAR PEDIDO</Link></StyledGreenButton>
 : null}

                </StyledDisplayCart>


            </div>
        )
    }
}


export default Cart