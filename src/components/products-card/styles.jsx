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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    margin: 15px 10px 15px 10px;
    height: 550px;
    width: 400px;
    color: black;
    align-items: center;
    img {
        width: 290px;
        height: 325px; 
        opacity:(90%);    
    };

    @media(max-width: 768px) {
        max-width: 300px;
        img {
            height: auto;
            max-width: 80%;
            margin-left: 20px;
        }
    }
    `

const StyledTextTitle = styled.h3`
    margin-top: 20px;
    margin-bottom: 0;
    min-height: 40px;
    justify-content: center;
    text-transform:uppercase;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: black;
    `

const StyledTextBrand = styled.h4`
    font-weight: bold;
    color:#808080;
    margin: 10px;
    `
const StyledPrice = styled.p`
    font-size: 20px;
    color: black;
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
