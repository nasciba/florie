import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { StyledDisplayCart, StyledTextBox, StyledImgCart } from '../cart/styles'
import { StyledCard, StyledIcons, StyledProductImg, StyledDescriptionProduct } from './styles'
import { StyledDisplay, StyledTextAccount } from '../auth/style';
import { StyledTitle, StyledContainer } from '../GlobalStyles'
import { StyledGreenButton } from '../buttons/styles'

export default class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfProducts: this.props.rest.listOfProducts
        };

    }

    deleteProduct = (productId) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/api/products/${productId}`)
            .then(responseFromApi => {
                if (responseFromApi.status === 200) {
                    for (let i = 0; i < this.state.listOfProducts.length; i += 1) {
                        if (this.state.listOfProducts[i]._id === productId) {
                            this.state.listOfProducts.splice(i, 1);
                        }
                    };
                    this.props.history.push('/list-admin');
                }
                else {
                    alert("Erro: O produto não foi deletado")
                }
            })

            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        if (this.props.loggedInUser.admin) {
            return (
                <StyledContainer>

                    <StyledDisplayCart>

                        <StyledTitle><span>GERENCIAR PRODUTOS</span></StyledTitle>
                        <StyledGreenButton>
                            <span>
                                <Link to={'/add-product'}>ADICIONAR PRODUTO</Link>
                            </span>
                        </StyledGreenButton>
                        {this.state.listOfProducts.map(product => {
                            return (
                                <StyledCard key={product._id}>
                                    <StyledProductImg>
                                        <Link to={`/products/${product._id}`}>
                                            <img src={product.imageUrl} alt={product.title && product.brand}></img>
                                        </Link>
                                    </StyledProductImg>
                                    <StyledDescriptionProduct>
                                        <span>Produto:</span>
                                        <span>{product.name}</span>
                                        <span>Marca:</span>
                                        <span>{product.brand}</span>
                                        <span>Preço:</span>
                                        <span>R${parseFloat(product.price).toFixed(2).replace('.', ',')}</span>
                                        <span>Estoque:</span>
                                        <span>{product.stock}</span>
                                        <span>Descrição: </span>
                                        <span>{product.description}</span>
                                    </StyledDescriptionProduct>
                                    <StyledIcons>

                                        <Link to={`/edit-product/${product._id}`} style={{ color: 'black' }}>
                                            <i className="fa fa-edit"></i>
                                        </Link>

                                        <i className="fa fa-trash" onClick={() => this.deleteProduct(product._id)}></i>
                                    </StyledIcons>

                                </StyledCard>
                            )
                        })}

                    </StyledDisplayCart>
                </StyledContainer>
            )
        }
        else {
            return (
                <StyledDisplay>
                    <StyledTextAccount>Você não tem acesso a esta área do site!</StyledTextAccount>
                </StyledDisplay>
            )
        }
    }
}
