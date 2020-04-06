import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StyledDisplayCart, StyledBoxCard, StyledCardCart, StyledTextBox, StyledProductQtyBtn, StyledImgCart, StyledImgEmptyCartDiv } from './styles'
import { StyledGreenButton } from '../buttons/styles';
import { StyledTitle } from '../products-categories-catalog/styles'


class Cart extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <StyledDisplayCart>
                {this.props.itemsInTheCart.length ?
                    (<React.Fragment>
                        <StyledTitle><span>CARRINHO</span></StyledTitle>
                        {this.props.itemsInTheCart.map((product) => (
                            <StyledBoxCard key={product.id}>
                                <StyledCardCart >
                                    <StyledImgCart>
                                        <Link to={`/products/${product.id}`}>
                                            <img src={product.image} alt={product.name && product.brand}></img>
                                        </Link>
                                    </StyledImgCart>
                                    <StyledTextBox>
                                        <p>{product.name}</p>
                                        <p style={{ color: 'gray' }}>{product.brand}</p>

                                        <p>R${parseFloat(product.price).toFixed(2).replace('.', ',')}</p>
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
                        )}
                        <h4> PREÇO TOTAL: R${parseFloat(this.props.totalPrice).toFixed(2).replace('.', ',')} </h4>
                        <StyledGreenButton> <Link to='/order' style={{ textDecoration: 'none', color: ' #26acb5' }}>CHECKOUT</Link></StyledGreenButton>
                    </React.Fragment>
                    )
                    :

                    <StyledImgEmptyCartDiv>
                        <h1>Sua sacola de compras está vazia!</h1>
                        <img src="/images/shopping-basket.svg" alt="ícone preto de um cesto de compras"></img>
                    </StyledImgEmptyCartDiv>
                }
            </StyledDisplayCart>

        )
    }
}


export default Cart