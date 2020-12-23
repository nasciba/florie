import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Hamburger, Line } from './styles';


class Navbar extends Component {
    render() {
        return (
            <Nav>
                <Hamburger>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                </Hamburger>
                <Link to='/'>
                        <img src='/images/logo/florie_logo.png' alt="logo florie store"></img>
                        
                </Link>
                
                      {/*   <li>
                            <i className="fa fa-search"></i>
                        </li> */}
                <ul>
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