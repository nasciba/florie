import styled from 'styled-components';

const StyledDisplayCart = styled.div`
    display: flex;
    flex-direction:column;
    flex-wrap: wrap;
    align-items: center;
    padding-top: 60px;
    margin-bottom: 100px;
    `

const StyledCardCart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    flex-wrap: wrap;
    margin: 0;
    `

const StyledBoxCard = styled.div`
        width: 800px;
        border: solid gray 2px;
        border-radius: 10px;
        margin: 10px;   
`

const StyledTextBox = styled.div`
    padding-top: 20px;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    margin-left: 25px;
    padding-bottom:20px;
    span {
        font-weight: bold;
        margin-top: 10px
    }
    h3,i {
        margin: 5px 5px 5px 10px;
    } 
`
const StyledProductQtyBtn = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: left;
    align-items: center;
    margin: 0;
    i {
        margin-left: 10px;
    };
    label {
        margin: 15px;
    }

`
const StyledImgCart = styled.div`
    width: 25%;
    margin-left: 5px;
    padding-left:30px;
    display: flex;
    flex-direction:column;
    justify-content: left;
    align-items: center;
    img {
        margin: 20px;
        height: 250px;
        width: 250px
    }
`
const StyledImgEmptyCartDiv = styled.div`
    width: 100vw;
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
    StyledProductQtyBtn,
    StyledImgCart,
    StyledImgEmptyCartDiv,
}