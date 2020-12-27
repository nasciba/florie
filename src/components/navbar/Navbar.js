import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Burgermenu } from './BurgerMenu';
import { CollapseMenu } from './CollapseMenu';
import { Logo } from './Logo'
import { FlexContainer, NavBar, NavLinks, Burgerwrapper } from './styles'

const Navbar = (props) => {
    return (
        <>
            <NavBar>
                <FlexContainer>
                    <Link to='/'> <Logo /> </Link>
                    <NavLinks>
                        <Link to="/profile"> <i style={{ color: "black" }} className="fa fa-user"></i></Link>
                        {/* <i className="fa fa-search"></i> */}
                        <Link to="/cart">
                            <span className='count'>{props.cartCount.length}</span><i style={{ color: "black" }} className="fa fa-shopping-bag"></i>
                        </Link>
                    </NavLinks>
                    <Burgerwrapper>
                        <Burgermenu navbarState={props.navbarState} handleNavbar={props.handleNavbar} />
                    </Burgerwrapper>
                </FlexContainer>
            </NavBar>
            <CollapseMenu
                navbarState={props.navbarState}
                handleNavbar={props.handleNavbar}
            />
        </>
    )
}





export default Navbar;

