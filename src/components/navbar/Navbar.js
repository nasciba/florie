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
                // this.props.history.push('/');
                // this.props.getUser(null);
            })
    }

    render() {
        if (this.props.userInSession) {
            return (

                // <Nav>
                //     {/* <Link to='/signup'>Cadastre-se</Link> */}
                //     <Burger>
                //         <div className="line1"></div>
                //         <div className="line2"></div>
                //         <div className="line3"></div>
                //     </Burger>
                //     <Link to='/'>
                //         <ImagesLogo>
                //             <img src='/images/logo_transparent.png' alt="logo florie store"></img>
                //             <img src='/images/logoTransparent.png' alt="logo florie store"></img>
                //         </ImagesLogo>
                //     </Link>
                //     <ul>
                //         <li><i className="fa fa-search"></i></li>
                //         <li><i className="fa fa-user"></i></li>
                //         <li>

                //                 <Link to="/cart">
                //                     <i style= {{ color: "black"}}className="fa fa-shopping-bag"></i>
                //                     </Link>

                //         </li>
                //     </ul>
                // </Nav >
                <nav className="nav-style" >

                    <ul style={{ textDecoration: 'none' }}>
                        <li>Olá, {this.props.userInSession.username}!</li>
                        <li>Products</li>
                        {this.props.userInSession.admin ? <li><Link to="/list-admin">Lista de produtos</Link></li> : null}

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
                        <div></div>
                        <div></div>
                        <div></div>
                    </Burger>
                    <Link to='/'>
                        <ImagesLogo>
                            <img src='/images/logo_transparent.png' alt="logo florie store"></img>
                            <img src='/images/logoTransparent.png' alt="logo florie store"></img>
                        </ImagesLogo>
                    </Link>
                    <ul>
                        <li>
                            <i className="fa fa-search"></i>
                        </li>
                        <li>
                            <Link to="/login">
                                <i style={{ color: "black" }} className="fa fa-user"></i>
                            </Link></li>
                        <li>

                            <Link to="/cart">
                                <i style={{ color: "black" }} className="fa fa-shopping-bag"></i>
                            </Link>

                        </li>
                    </ul>
                </Nav >
                // </nav>
            )
        }
    }
}

export default Navbar;