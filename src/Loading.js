import React from 'react';
import styled from 'styled-components'

const H2 = styled.h2`
    font-family: Roboto;
    color: gray;
    letter-spacing: 3px;
    width: 100%;
    text-align: center;
    margin-top: 150px
`
const LoadingContent = () => {
   return(
    <H2>Carregando</H2>
   ) 
}

export default LoadingContent