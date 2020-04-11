import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { StyledDisplayCart, StyledCardCart, StyledTextBox, StyledImgCart } from '../cart/styles'
import { StyledCard, StyledIconsVertical } from './styles'
import { StyledDisplay, StyledTextAccount } from '../auth/style';
import { StyledTitle } from '../products-categories-catalog/styles'
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
                <StyledDisplayCart>

                    <StyledTitle><span>GERENCIAR INFORMAÇÕES SOBRE PRODUTOS</span></StyledTitle>
                    <StyledGreenButton>
                        <span>
                            <Link to={'/add-product'}>ADICIONAR NOVO PRODUTO</Link>
                        </span>
                    </StyledGreenButton>
                    {this.state.listOfProducts.map(product => {
                        return (
                            <StyledCard key={product._id}>
                                <StyledCardCart >
                                    <StyledImgCart>
                                        <Link to={`/products/${product._id}`}>
                                            <img src={product.imageUrl} alt={product.title && product.brand}></img>
                                        </Link>
                                    </StyledImgCart>
                                    <StyledTextBox>
                                        <span>Produto:</span>
                                        {product.name}
                                        <span>Marca:</span>
                                        {product.brand}
                                        <span>Preço:</span>
                                        R${parseFloat(product.price).toFixed(2).replace('.', ',')}
                                        <span>Estoque:</span>
                                        {product.stock}
                                        <span>Descrição: </span>
                                        {product.description}
                                    </StyledTextBox>
                                    <StyledIconsVertical>

                                        <Link to={`/edit-product/${product._id}`} style={{ color: 'black' }}>
                                            <i className="fa fa-edit"></i>
                                        </Link>

                                        <i className="fa fa-trash" onClick={() => this.deleteProduct(product._id)}></i>
                                    </StyledIconsVertical>

                                </StyledCardCart>
                            </StyledCard>
                        )
                    })}

                </StyledDisplayCart>
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
