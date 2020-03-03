import styled from 'styled-components';

const StyledCardProduct = styled.div`
    border: solid red 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    margin: 25px;
    padding: 25px
    margin: 10px;
    width: 550px;
    max-height: 25%;
    color: black;
    font-family: 'Roboto';
    align-items: center;
    img {
        width: 300px;
        height: 400px;
    };
    link {
        text-decoration: none;
    }
    `
    
    const StyledTextTitle = styled.p`
    font-size: 18px;
    justify-content: center;
    border: solid red 1px;
    text-transform:uppercase;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: black;
    `
    const StyledTextProduct = styled.p`
    font-size: 15px;
    margin: 0;

    `

export {
    StyledCardProduct,
    StyledTextTitle,
    StyledTextProduct, 
}