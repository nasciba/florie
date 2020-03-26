import styled from 'styled-components';

const StyledDisplay = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    padding: 0;
    padding-bottom: 100px;
    
`

const StyledCardProduct = styled.div`
    border: solid gray 2px;
    // outline: orange;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;    
    padding: 25px;
    margin: 30px;
    min-height: 600px;
    width: 400px;
    max-height: 25%;
    color: black;
    font-family: 'Roboto';
    align-items: center;
    img {
        width: 345px;
        height: 400px;
    };
    link {
        text-decoration: none;
    }
    `

const StyledTextTitle = styled.p`
    margin: 20px;
    min-height: 100px;   
    font-size: 24px;
    justify-content: center;
    // border: solid red 1px;
    text-transform:uppercase;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: black;
    `

const StyledTextBrand = styled.p`
    font-size: 22px;
    font-weight: bold;
    color:#808080;
    // border: solid red 1px;
    margin: 0
    
    `
const StyledPrice = styled.p`
    font-size: 30px;
    color: black;
    font-weight: bold;
    // border: solid red 1px;
    margin: 0;
`

const StyledMessage = styled.p`
    text-size: 5px;
    margin-top: 25px;  
    color:#CC3A2D;
    font-weight:bold;
    justify-content:center;
`

export {
    StyledDisplay,
    StyledCardProduct,
    StyledTextTitle,
    StyledTextBrand,
    StyledPrice,
    StyledMessage
}
