import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './auth/auth-service';

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
                        <li>Olá, {this.props.userInSession.username}!</li>
                        <li>Products</li>
                        {this.props.userInSession.admin ? <li><Link to="/products-list-admin">Lista de produtos</Link></li> : null}

                    </ul>
                    <Link to='/'>
                        <button onClick={() => this.logoutUser()}>Logout</button>
                    </Link>
                </nav>
            )
        } else {
            return (
                <nav className="nav-style">
                    <ul>
                        <li>
                            <Link to='/signup'>Cadastre-se</Link>
                        </li>

                    </ul>
                </nav>
            )
        }
    }
}

export default Navbar;