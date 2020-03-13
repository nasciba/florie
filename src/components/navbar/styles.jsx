import styled from 'styled-components'

const Nav = styled.nav`
    
    margin-top: 0;
    display: flex;
    position:fixed;
    top: 0;
    left: 0;

    height: 100px;
    width: 100vw;
    background-color: white;

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
        justify-content: space-around;
        width: 240px;
        
        li {
            a {
                text-decoration: none;

            }
            span {
                background: red;
                padding: 2px 5px;
                color: white;
                border-radius: 100%;
                font-size: 15px;

            }
        }
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
    margin: 10px 0px 0px 40px;    
`


export {
    Nav,
    Burger,
    ImagesLogo,
}