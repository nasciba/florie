import styled from 'styled-components';

const StyledDisplayCart = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    padding-top: 60px;
    margin-bottom: 100px;
    min-height: 50vh;

    @media(max-width: 768px) {
        width: 100%;
    }

`
const FlexboxCardsandSubtotal = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    @media(max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
`
const FlexBox = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column; 
    justify-content: start;
    align-items: center;  
    
    @media(max-width: 768px) {
        width: 100%;
    }

`

const JustifyAlignCenter = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 35px;

`

const StyledH3 = styled.h3`
    width: 100%;
    text-align: center;
    color: #808080;
    letter-spacing: 1px;

`
const StyledH4 = styled.h4`
    color: black;   
    margin: 10px;
`;

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

const StyledCardItem = styled.div`
    width: 100%;
    border-right: solid lightgray 1px;
    margin: 20px;   

    @media(max-width: 768px) {
        border-right: none;
    }
`

const StyledTextBox = styled.div`
    display: flex;
    margin: 10px 10px 30px;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    font-size: 15px;
    padding-top: 20px;
    width: 65%;

    span {
        margin: 10px; 
        font-size: 15px;
        color: #808080; 
    };

    @media(max-width: 768px) {
        align-items: center;
        width:90%;
        button {
            width: 50%;
        }
    }
`
const StyledIconRemoveProduct = styled.div`
    color: #808080;
    font-size: 15px;

    i {
        margin-left: 15px;
    }
    span {
        font-family: Roboto;
        font-size: 15px;
        margin: 20px;
        font-weight: light;
    }
`
const StyledQuantityBtn = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: left;
    align-items: center;

    i {
        color: #808080;
        margin: 20px 15px 15px;
        font-size: 15px;        
    }

    span {
        margin: 20px 5px 15px;
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
        padding: 5px;
        padding-right: 30px;
    }

    @media(max-width: 768px) {
        width: 100%;
        justify-content: center;
        img {
            width: 40%;
        }
    }
    
`
const StyledEmptyCart = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    align-items: center;
    justify-content: center;

    img {
        margin: 50px;
        height: 10%;
        width: 10%
    }

    @media(max-width: 768px) {
        h1 {
            font-size: 16px;

        };

        img {
            width: 20%;
        }
    }
    `
export {
    FlexBox,
    FlexboxCardsandSubtotal,
    JustifyAlignCenter,
    StyledCardItem,
    StyledCardCart,
    StyledDisplayCart,
    StyledH3,
    StyledH4,
    StyledImgCart,
    StyledEmptyCart,
    StyledIconRemoveProduct,
    StyledQuantityBtn,
    StyledTextBox,
}