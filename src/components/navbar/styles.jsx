import styled from 'styled-components'

const Nav = styled.nav`
    margin-right: 30px;
    margin-bottom: 30px;
    margin-top: 30px;
    display: flex;
    margin-top: 0;
    padding-top: 0
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
    justify-content: space-between; 
    ul {
        
        padding: 0;
        margin: 0;
        height: 40px;
        display: flex;
        flex-direction: row;
        list-style: none;
        justify-content: space-between;
        width: 240px;
        // border: solid black 1px
         
    };
    img {
        max-height: 70px;
    }
`
const Burger = styled.div`
    margin-left: 30px; 
    div {         
        width: 30px;
        height: 4px;
        margin: 6px;
        background-color: black;
}
`
const ImagesLogo = styled.div`
    display:flex;
    justify-content: center;
    margin:15px;    
`

export {
    Nav,
    Burger,
    ImagesLogo
}