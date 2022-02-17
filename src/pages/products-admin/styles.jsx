import styled from 'styled-components';

const StyledIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    i {
        margin: 20px;
        font-size: 20px;
        color: #404010;
    }

    i:hover {
        color: #26acb5
    }

    @media(max-width: 768px) {
        width: 100%
    }

`
const StyledCard = styled.div`
    width: 90%;
    margin: 20px;   
    text-align: justify;
    border: solid #26acb5 2px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;

    @media(max-width: 768px) {
        flex-direction: column; 
        justify-content: center;
        align-items: center;
    }    
`
const StyledDescriptionProduct = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    span {
        font-size: 17px;
    }

    @media(max-width: 768px) {
        width: 90%;
        text-align: center;
        span {
            font-size: 16px;
        }
    }
`
const StyledProductImg = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    img {
        width: 100%;
        height: auto;
    }
    @media(max-width: 768px) {
        width: 50%;
        img {
            padding-top: 30px;
        }

    }
`
export {
    StyledIcons,
    StyledCard,
    StyledProductImg,
    StyledDescriptionProduct
}