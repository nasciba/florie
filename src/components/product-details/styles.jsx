import styled from 'styled-components';

const StyledDisplay = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
const StyledImgProduct = styled.div`
    padding-top: 100px;   
    border: solid black 1px;
    img {
        height: 650px;
        width: 510px;
        border: solid black 1px;    
      
    }
    
`
const StyledProdDetailsText = styled.div`
    padding: 20px;
    margin: 50px;
    border: solid black 1px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    text-align: center;
    font-size:35px;
    button {
        width: 100px;
    }
`

export {
    StyledDisplay,
    StyledImgProduct,
    StyledProdDetailsText,
    
}

