import styled from 'styled-components';

const StyledDisplay = styled.div`
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const MenuContainer = styled.div`
    display: flex;
    flex-direction: row
    justify-content: center;

`
const MenuCards = styled.div`
    width: 280px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px;
    // border: solid 2px gray;
    // border-radius: 8px;
    img {
        height: 100px;
        width: 100px;
    };
    p {
        color:#26acb5;
        font-weight: bold;
    }
    a { 
        display: flex;
        flex-direction: column;
        text-decoration: none;
        justify-content: center;
        align-items: center;
       
    }
`

export {
    StyledDisplay,
    MenuContainer,
    MenuCards,
}