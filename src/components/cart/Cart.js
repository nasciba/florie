import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StyledDisplayCart, StyledBoxCard, StyledCardCart, StyledTextBox, StyledProductQtyBtn, StyledImgCart } from './styles'
import { StyledGreenButton } from '../buttons/styles';


class Cart extends Component {
    constructor(props) {
        super(props);
        
    }
   
    render() {
        return (
            <StyledDisplayCart>
                {this.props.itemsInTheCart.length ?
                    [
                        <h1>CARRINHO</h1>,

                        this.props.itemsInTheCart.map((product) => {
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
                                            <StyledProductQtyBtn>
                                                <i className="fa fa-minus-square" onClick={() => { this.props.removeItem(product.id) }}></i>
                                                <label>{product.quantity}  </label>
                                                <i className="fa fa-plus-square" onClick={() => { this.props.addItem(product.id) }}></i>
                                            </StyledProductQtyBtn>
                                            <StyledGreenButton onClick={() => { this.props.deleteItem(product.id) }}>REMOVER</StyledGreenButton>
                                        </StyledTextBox>
                                    </StyledCardCart>
                                </StyledBoxCard>

                            )
                        }),

                        <h3> PREÇO TOTAL: R${parseFloat(this.props.totalPrice).toFixed(2).replace('.', ',')} </h3>,

                        <StyledGreenButton> <Link to='/order' style={{ textDecoration: 'none', color: ' #26acb5' }}>FECHAR PEDIDO</Link></StyledGreenButton>
                    ]
                    :
                    <h1>O seu carrinho está vazio!</h1>

                }
            </StyledDisplayCart>

        )
    }
}


export default Cart