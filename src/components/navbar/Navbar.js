import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';
import { Nav, Burger, ImagesLogo } from './styles';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedInUser: null };
        this.service = new AuthService();
    }

    logoutUser = () => {
        this.service.logout()
            .then(() => {
                this.setState({ loggedInUser: null });
                // this.props.getUser(null);
            })
    }

    render() {
        if (this.props.userInSession) {
            return (

                <nav className="nav-style" >

                    <ul style={{ textDecoration: 'none' }}>
                        {/* <li>Olá, {this.props.userInSession.username}!</li> */}
                        <li>Products</li>
                        {/* {this.props.userInSession.admin ? <li><Link to="/list-admin">Lista de produtos</Link></li> : null} */}

                    </ul>
                    <Link to='/'>
                        <button onClick={() => this.logoutUser()}>Logout</button>
                    </Link>
                </nav>
            )
        } else {
            return (
                // <nav className="nav-style">
                <Nav>
                    {/* <Link to='/signup'>Cadastre-se</Link> */}
                    <Burger>
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </Burger>
                    <ImagesLogo>
                        <img src='/images/logo_transparent.png' alt="logo florie store"></img>
                        <img src='/images/logoTransparent.png' alt="logo florie store"></img>
                    </ImagesLogo>
                    <ul>
                        <li><i className="fa fa-search"></i></li>
                        <li><i className="fa fa-user"></i></li>
                        <li><i className="fa fa-shopping-bag"></i></li>

                    </ul>
                </Nav >
                // </nav>
            )
        }
    }
}

export default Navbar;