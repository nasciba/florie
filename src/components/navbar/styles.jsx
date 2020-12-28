import styled from 'styled-components';
import { animated } from "react-spring";

//Navbar

export const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: white;
  z-index: 1;
  font-size: 1rem;
`;

export const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 1rem 0 0;
  justify-content: space-between;
  height: 5rem;

`;

export const Burgerwrapper = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: row;
  width: 20%;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    margin-right: 40px;
 }

  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 679px) {
    width: 25%;
  }

  @media (max-width: 516px) {
    width: 50%;
  }
  @media (max-width: 352px) {
    width: 65%;
  }

  
  
`;

export const BaloonNumberOfItems = styled.span`
  padding: 2px 5px;
  color: white;
  background-color: red;
  border-radius: 100%;
  font-size: 14px;
  font-weight: lighter;
  text-decoration: none;

`

export const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  
  & a {
    color: black;
    text-transform: uppercase;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
    
    @media (max-width: 550px) {
      a : i {
        font-size: 14px;
      }
    }
  }
`;


//Burgermenu

export const Wrapper = styled.div`
  position: relative;
  padding-top: .7rem;
  cursor: pointer;
  display: block;
  
  & span {
    background: black;
    display: block;
    position: relative;
    width: 2.5rem;
    height: .4rem;    
    margin-bottom: .7rem;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
      opacity: 0;
    }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -13.2px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 13.2px;
  }

  @media(max-width: 768px) {
    & span {
      width: 1.6rem;
      height: .3rem;    
      margin-bottom: .5rem;
    }
   
    .open span:nth-child(3) {
      transform: rotate(45deg);
      top: -12.5px;
    }
  
    .open span:nth-child(1) {
      transform: rotate(-45deg);
      top: 12.5px;
    }
  }


`;

//Collapse wrapper

export const Collapsewrapper = styled(animated.div)`
  background: white;
  position: fixed;
  z-index: 1;
  text-align: center;
  top: 4.5rem;
  left: 0;
  right: 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const NavLinksCollapseMenu = styled.ul`
  list-style-type: none;
  padding: 2rem 2rem 2rem 2rem;
  
  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.1rem;
    line-height: 2;
    color: black;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    letter-spacing: 3px;

    &:hover {
      color: #26acb5;
    }
  }
`;

// Logo

export const Image = styled.img`
  height: 70%;
  margin-left: auto;
  margin-top: 10px;

  @media(max-width: 460px) {
    max-width: 70%;
    height: 70%;
  }

  @media(max-width: 352px) {
    max-width: 50%;
    height: 45%;
  }

  
`;

export default {
  BaloonNumberOfItems,
  Collapsewrapper,
  FlexContainer,
  NavBar,
  NavLinks,
  NavLinksCollapseMenu,
  Wrapper,

}

