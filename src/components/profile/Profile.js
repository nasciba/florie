import React, { Component } from 'react'
import AuthService from '../auth/auth-service';
import { Link } from 'react-router-dom';
import { StyledDisplay, MenuContainer, MenuCards } from './styles'

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = { loggedInUser: null };
        this.service = new AuthService();
    }

    logoutUser = () => {
        this.service.logout()
            .then(() => {
                this.setState({ loggedInUser: null });
                this.props.history.push('/');
                this.props.rest.getUser(null);
            })
    }



    render() {
        if (this.props.loggedInUser.admin) {

            return (
                <StyledDisplay>
                    <h2>Olá, <span style={{ fontWeight: 'bold' }}>{this.props.loggedInUser.username}</span>!</h2>
                    <MenuContainer>
                        <MenuCards>
                            <Link to='/list-admin'>
                                <img src="/images/product-list.svg"></img>
                                <p>LISTA DE PRODUTOS</p>
                            </Link>
                        </MenuCards>
                        <MenuCards>
                            <Link to='/add-product'>
                                <img src="/images/plus.svg"></img>
                                <p>ADICIONAR PRODUTO</p>
                            </Link>
                        </MenuCards>
                        <MenuCards onClick={() => this.logoutUser()}>
                            <img src="/images/logout.svg"></img>
                            <p>LOGOUT</p>
                        </MenuCards>
                        
                        
                    </MenuContainer>
                </StyledDisplay>
            )
        }

        else {
            return (
                <StyledDisplay>
                    <h2>Olá, <span style={{ fontWeight: 'bold' }}>{this.props.loggedInUser.username}</span>!</h2>
                    <MenuContainer>
                        <MenuCards>
                            <Link to='/'>
                                <img src="/images/product-list.svg"></img>
                                <p>MEU CADASTRO</p>
                            </Link>
                        </MenuCards>
                        <MenuCards>
                            <Link to='/'>
                                <img src="/images/tag.svg"></img>
                                <p>MEUS PEDIDOS</p>
                            </Link>
                        </MenuCards>
                        <MenuCards onClick={() => this.logoutUser()}>
                            <img src="/images/logout.svg"></img>
                            <p>LOGOUT</p>
                        </MenuCards>
                        
                        
                    </MenuContainer>
                </StyledDisplay>
            )
        }
    }

}

