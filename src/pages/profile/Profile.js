import React, { Component } from 'react'
import AuthService from '../../service/authService';
import { Link } from 'react-router-dom';
import { StyledDisplay, MenuContainer, MenuCards, StyledTitle } from './styles'


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
                sessionStorage.removeItem('loggedUser');
                sessionStorage.removeItem('cart');
                // this.setState({ loggedInUser: null });
                this.props.rest.getUser(null);
                this.props.rest.emptyCart();
                this.props.history.push('/');
            })
    }

    

    render() {
        if (this.props.loggedInUser.admin) {
            return (
                <StyledDisplay>
                    <StyledTitle>Olá, {this.props.loggedInUser.firstName}!</StyledTitle>
                    <MenuContainer>
                        <MenuCards>
                            <Link to='/list-admin'>
                                <p>LISTA DE PRODUTOS</p>
                                <img src={require("../../assets/images/product-list.svg")} alt="ícone"></img>
                            </Link>
                        </MenuCards>
                        <MenuCards>
                            <Link to='/add-product'>
                                <p>ADICIONAR PRODUTO</p>
                                <img src={require("../../assets/images/plus.svg")} alt="ícone"></img>
                            </Link>
                        </MenuCards>
                        <MenuCards onClick={() => this.logoutUser()}>
                            <p>LOGOUT</p>
                            <img src={require("../../assets/images/logout.svg")} alt="ícone"></img>
                        </MenuCards>
                    </MenuContainer>
                </StyledDisplay>
            )
        } else if (!this.props.loggedInUser.admin) {
            return (
                <StyledDisplay>
                    <StyledTitle>Olá, {this.props.loggedInUser.firstName}!</StyledTitle>
                    <MenuContainer>
                        <MenuCards>
                            <Link to='/my-data'>
                                <p>MEU CADASTRO</p>
                                <img src={require("../../assets/images/product-list.svg")} alt="ícone"></img>
                            </Link>
                        </MenuCards>
                        <MenuCards>
                            <Link to={`/my-orders/${this.props.loggedInUser._id}`}>
                                <p>MEUS PEDIDOS</p>
                                <img src={require("../../assets/images/tag.svg")}  alt="ícone"></img>
                            </Link>
                        </MenuCards>
                        <MenuCards onClick={() => this.logoutUser()}>
                            <p>LOGOUT</p>
                            <img src={require("../../assets/images/logout.svg")} alt="ícone"></img>
                        </MenuCards>
                    </MenuContainer>
                </StyledDisplay>
            )
        }
    }
}

