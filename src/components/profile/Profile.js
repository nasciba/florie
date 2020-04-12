import React, { Component } from 'react'
import AuthService from '../auth/auth-service';
import { Link } from 'react-router-dom';
import { StyledDisplay, MenuContainer, MenuCards } from './styles'


export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedInUser: this.props.loggedInUser
        };
        this.service = new AuthService();
    }

    logoutUser = () => {
        this.service.logout()
            .then(() => {
                this.setState({ loggedInUser: null });
                sessionStorage.removeItem('loggedUser');
                sessionStorage.removeItem('cart');
                this.props.rest.emptyCart();
                this.props.history.push('/');
                this.props.rest.getUser(null);
            })
    }

    render() {
        if (this.props.loggedInUser.admin) {
            return (
                <StyledDisplay>
                    <h2>Olá, <span style={{ fontWeight: 'bold' }}>{this.props.loggedInUser.firstName}</span>!</h2>
                    <MenuContainer>
                        <MenuCards>
                            <Link to='/list-admin'>
                                <img src="/images/product-list.svg" alt="ícone"></img>
                                <p>LISTA DE PRODUTOS</p>
                            </Link>
                        </MenuCards>
                        <MenuCards>
                            <Link to='/add-product'>
                                <img src="/images/plus.svg" alt="ícone"></img>
                                <p>ADICIONAR PRODUTO</p>
                            </Link>
                        </MenuCards>
                        <MenuCards onClick={() => this.logoutUser()}>
                            <img src="/images/logout.svg" alt="ícone"></img>
                            <p>LOGOUT</p>
                        </MenuCards>
                    </MenuContainer>
                </StyledDisplay>
            )
        } else if (!this.props.loggedInUser.admin) {
            return (
                <StyledDisplay>
                    <h2>Olá, {this.props.loggedInUser.firstName}!</h2>
                    <MenuContainer>
                        <MenuCards>
                            <Link to='/my-data'>
                                <img src="/images/product-list.svg" alt="ícone"></img>
                                <p>MEU CADASTRO</p>
                            </Link>
                        </MenuCards>
                        <MenuCards>
                            <Link to='/'>
                                <img src="/images/tag.svg" alt="ícone"></img>
                                <p>MEUS PEDIDOS</p>
                            </Link>
                        </MenuCards>
                        <MenuCards onClick={() => this.logoutUser()}>
                            <img src="/images/logout.svg" alt="ícone"></img>
                            <p>LOGOUT</p>
                        </MenuCards>
                    </MenuContainer>
                </StyledDisplay>
            )
        }
    }
}

