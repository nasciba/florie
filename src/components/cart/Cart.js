import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    FlexBox,
    FlexboxCardsandSubtotal,
    JustifyAlignCenter,
    StyledDisplayCart,
    StyledCardItem,
    StyledCardCart,
    StyledIconRemoveProduct,
    StyledImgCart,
    StyledEmptyCart,
    StyledH3,
    StyledH4,
    StyledQuantityBtn,
    StyledTextBox,
} from './styles';
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
                        <StyledTitle> Sacola de Compras </StyledTitle>
                        <FlexboxCardsandSubtotal>
                            <FlexBox>
                                {this.props.itemsInTheCart.map((product) => (
                                    <StyledCardItem key={product.id}>
                                        <StyledCardCart >
                                            <StyledImgCart>
                                                <Link to={`/products/${product.id}`}>
                                                    <img src={product.image} alt={product.name && product.brand}></img>
                                                </Link>
                                            </StyledImgCart>
                                            <StyledTextBox>
                                                <StyledH4>{product.brand}</StyledH4>
                                                <span>{product.name}</span>
                                                <span>Preço: R${parseFloat(product.price).toFixed(2).replace('.', ',')}</span>
                                                <StyledQuantityBtn>
                                                    <i className="fa fa-minus-square" onClick={() => { this.props.removeItem(product.id) }}></i>
                                                    <span>{product.quantity}</span>
                                                    <i className="fa fa-plus-square" onClick={() => { this.props.addItem(product.id) }}></i>
                                                </StyledQuantityBtn>
                                                <StyledIconRemoveProduct>
                                                    <i className="fa fa-trash" onClick={() => { this.props.deleteItem(product.id) }}></i>
                                                    <span>Remover do carrinho</span>
                                                </StyledIconRemoveProduct>
                                            </StyledTextBox>
                                        </StyledCardCart>
                                    </StyledCardItem>
                                )
                                )}
                            </FlexBox>
                            <FlexBox>
                                <JustifyAlignCenter>
                                    <StyledH3> SUBTOTAL: R${parseFloat(this.props.totalPrice).toFixed(2).replace('.', ',')} </StyledH3>
                                    <StyledGreenButton> <Link to='/order' style={{ textDecoration: 'none' }}>Fechar Pedido</Link></StyledGreenButton>
                                </JustifyAlignCenter>
                            </FlexBox>
                        </FlexboxCardsandSubtotal>
                    </React.Fragment>
                    )
                    :
                    
                        <StyledEmptyCart>
                            <h1>Sua sacola está vazia : (</h1>
                            <img src={require('../../assets/shopping-basket.svg')} alt="ícone preto de um cesto de compras"></img>
                            <StyledGreenButton>
                                <span>
                                    <Link to={'/catalog'}>COMPRAR</Link>
                                </span>
                            </StyledGreenButton>
                        </StyledEmptyCart>
                }
            </StyledDisplayCart>

        )
    }
}


export default Cart