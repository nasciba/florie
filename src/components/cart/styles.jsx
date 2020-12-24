import styled from 'styled-components';

const StyledDisplayCart = styled.div`
    display: flex;
    flex-direction:column;
    flex-wrap: wrap;
    align-items: center;
    padding-top: 60px;
    margin-bottom: 100px;
    min-height: 50vh;
`

const StyledCardCart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-around;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`

const StyledBoxCard = styled.div`
        max-width: 750px;
        border: solid gray 2px;
        border-radius: 10px;
        margin: 20px;   
`

const StyledTextBox = styled.div`
    display: flex;
    margin:25px;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    font-size: 16px;
    padding-top: 20px;
    width: 65%;
    span {
        font-weight: bold;  
    }
    h4, h5 {
        margin: 10px 0;
    }
    
    button {
        width: 15%;
    }
    
    @media(max-width: 768px) {
        align-items: center;
        button {
            width: 50%;
        }
    }
`
const StyledQuantityBtn = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: left;
    align-items: center;
    span {
        margin: 25px;
    }
    @media(max-width: 768px) {
        justify-content: center;
    }

`
const StyledImgCart = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    img {
        height: auto;
        width: 100%;
        padding: 20px;
    }
    @media(max-width: 768px) {
        width: 80%;
    }
    
`
const StyledImgEmptyCartDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    align-items: center;
    justify-content: center;
    img {
        margin-top: 50px;
        height: 10%;
        width: 10%
    }
`
export {
    StyledDisplayCart,
    StyledBoxCard,
    StyledCardCart,
    StyledTextBox,
    StyledQuantityBtn,
    StyledImgCart,
    StyledImgEmptyCartDiv,
}