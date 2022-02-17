import React from 'react';
import { Wrapper } from '../styles'

export const Burgermenu = (props) => {
    return (
      <Wrapper onClick={props.handleNavbar}>
        <div className={ props.navbarState ? "open" : "" }>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
        </div>
      </Wrapper>
    );
  }
  
