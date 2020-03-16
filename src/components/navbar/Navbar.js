import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';
import { Nav, ImagesLogo } from './styles';

class Navbar extends Component {
    constructor(props) {
        super(props);
        // this.state = { loggedInUser: null };
        // this.service = new AuthService();
    }


    render() {

        return (
            <Nav>

                <Link to='/'>
                    <ImagesLogo>
                        <img src='/images/logo_transparent.png' alt="logo florie store"></img>
                        <img src='/images/logoTransparent.png' alt="logo florie store"></img>
                    </ImagesLogo>
                </Link>
                <ul>
                    {/* <li>
                            <i className="fa fa-search"></i>
                        </li> */}
                    <li>
                        <Link to="/profile">
                            <i style={{ color: "black" }} className="fa fa-user"></i>
                        </Link>
                    </li>
                    <li>

                        <Link to="/cart">
                            <span className='count'>{this.props.cartCount}</span><i style={{ color: "black" }} className="fa fa-shopping-bag"></i>
                        </Link>

                    </li>
                </ul>
            </Nav >
        )

    }
}

export default Navbar;