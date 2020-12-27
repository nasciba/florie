import React from 'react';
import { useSpring } from 'react-spring';
import { Collapsewrapper, NavLinksCollapseMenu } from './styles'

export const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <Collapsewrapper 
      style={{
        transform: open.interpolate({
          range: [0, 0.5, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinksCollapseMenu>
          <li><a href="/cart" onClick={props.handleNavbar}>Carrinho</a></li>
          <li><a href="/login" onClick={props.handleNavbar}>Login</a></li>
          <li><a href="/signup" onClick={props.handleNavbar}>Cadastro</a></li>
        </NavLinksCollapseMenu>
      </Collapsewrapper>
    );
  }
  return null;
};



