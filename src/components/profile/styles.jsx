import styled from 'styled-components';

const StyledDisplay = styled.div`
    min-height: 90vh;
    margin-top: 89px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    
`
const StyledTitle = styled.h1`
    letter-spacing: 5px;
    color: gray;
    padding-top: 30px;
    
`
const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media(max-width: 1024px) {
        flex-direction: column;
    }
`
const MenuCards = styled.div`
    width: 280px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px;
    img {
        height: auto;
        width: 100px;
    };

    img:hover {
        transform: scale(1.1);
    }
    p {
        color:#26acb5;
        font-weight: bold;
        margin: 25px;
        font-size: 16px;
    }
    a { 
        display: flex;
        flex-direction: column;
        text-decoration: none;
        justify-content: center;
        align-items: center;
       
    }
    @media(max-width: 1024px) {
        margin: 5px;
    }
`
const OrdersList = styled.ul`
    margin: 30px 0 50px 0;
`
const CardEachOrder = styled.li`
    max-width: 1000px;
    list-style: none;
    
`
const CardContainer = styled.div`
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: row; 
    border: solid lightgray 1px;
    justify-content: space-around;  
    align-items: center; 
    padding: 30px;
    margin: 20px;
   
    @media(max-width: 768px) {
        flex-direction: column;
        width: 90%;
        justify-content: center;  
    }

`

const OrdersImagesColumn = styled.div`
    width: 40%;
    height: 30%;
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: left;
    @media(max-width: 768px) {
        width: 100%
    }
`

const OrdersStatusColumn = styled.div`
    width: 30%;
    height: 100%;
    margin: 8px;
    font-size: 16px;
    display: flex; 
    p {
        margin: 15px 0 15px 0;

    }

    @media(max-width: 768px) {
        width: 100%;
        justify-content: center;    
        align-items: center;
    }
`

const OrdersInfoColumn = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    label {
        margin: 15px 0 15px 0;
        text-align: center;
        color: gray;
        font-weight: bold;
    }
    span {
        text-align: center;
    }
    @media(max-width: 768px) {
        width: 100%;
        justify-content: center;    
        align-items: center;
    }
`
const OrdersImages = styled.div`
    height: 30%;
    width: 30%;   
    img {
        max-height: 100%;
        max-width: 100%; 
    }

`

const StyledBoxOfData =styled.div`
    font-family: 12px;
`

const StyledData = styled.div`
    width: 32%;
    margin: 20px 10px 25px 20px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: start;
    width: 45%;
    span {
        display: flex;
        flex-wrap: wrap;
        font-size: 17px;
    }
    label {
        color: gray;
        font-size: 13px;
    }
    @media(max-width: 768px) {
        align-items: center;
        margin: 20px 5px 25px 5px;
        width: 90%; 
        justify-content: start;
    }
`

const StyledBorder = styled.div`
    margin: 35px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 604px;
    border: solid lightgray 2px;
    border-radius: 3px;
    form {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
  
    @media(max-width: 768px) {
        flex-direction: column;
        max-width: 80%;
        align-items: center;
        justify-content: center;
    }
    
    `
    const StyledFormField = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 20px;
    input {
        border: solid lightgray 1px;
        border-radius: 5px; 
        font-size: 16px;
        height: 25px;
        padding: 5px;
        outline-color:#26acb5;
    }
    label {
        font-size: 13px;
        color: gray;
        margin: 10px 0 10px 0;
     
    }
    @media(max-width: 768px) {
        width: 80%;
    }
`

export {
    StyledDisplay,
    MenuContainer,
    MenuCards,
    OrdersList,
    CardEachOrder,
    CardContainer,
    OrdersImages,
    OrdersStatusColumn,
    OrdersInfoColumn,
    OrdersImagesColumn,
    StyledTitle,
    StyledData,
    StyledBorder,
    StyledFormField
}