import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Burgermenu } from "./components/BurgerMenu";
import { CollapseMenu } from "./components/CollapseMenu";
import { Logo } from "./components/Logo";
import {
  BaloonNumberOfItems,
  FlexContainer,
  NavBar,
  NavLinks,
  Burgerwrapper,
} from "./styles";
import { CartContext } from "../../contexts/CartContext";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { cart } = useContext(CartContext);

  const handleNavbar = React.useCallback(() => {
    setNavbarOpen(!navbarOpen);
  }, [navbarOpen]);

  return (
    <>
      <NavBar>
        <FlexContainer>
          <Link to="/">
            {" "}
            <Logo />{" "}
          </Link>
          <NavLinks>
            <Link to="/profile">
              {" "}
              <i style={{ color: "black" }} className="fa fa-user"></i>
            </Link>
            {/* <i className="fa fa-search"></i> */}
            <Link to="/cart">
              <BaloonNumberOfItems className="count">
                {cart.length}
              </BaloonNumberOfItems>
              <i style={{ color: "black" }} className="fa fa-shopping-bag"></i>
            </Link>
          </NavLinks>
          <Burgerwrapper>
            <Link to="/cart">
              <BaloonNumberOfItems className="count">
                {cart.length}
              </BaloonNumberOfItems>
              <i style={{ color: "black" }} className="fa fa-shopping-bag"></i>
            </Link>
            <Burgermenu navbarState={navbarOpen} handleNavbar={handleNavbar} />
          </Burgerwrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu navbarState={navbarOpen} handleNavbar={handleNavbar} />
    </>
  );
};

export default Navbar;
