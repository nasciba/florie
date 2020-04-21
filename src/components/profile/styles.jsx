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
const OrdersList = styled.ul`
    // list-style: none;
`
const CardMyOrder = styled.li`
    width: 800px;
    list-style: none;

`
const CardContainer = styled.div`
    padding: 20px;
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: row; 
    border: solid lightgray 1px;
    justify-content: space-around;  
    align-items: center; 
    margin: 15px;   

`

const OrdersImagesColumn = styled.div`
    width: 40%;
    height: 30%;
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: left;
`

const OrdersStatusColumn = styled.div`
    width: 30%;
    height: 100%;
    font-size: 12px;
    border-left: solid lightgray 1px;
    border-right: solid lightgray 1px;
`

const OrdersInfoColumn = styled.div`
    width: 30%;
    display:flex;
    flex-direction: column;
    font-size: 12px;
`
const OrdersImages = styled.div`
    height: 30%;
    width: 30%;   
    img {
        max-height: 100%;
        max-width: 100%; 
    }

`
export {
    StyledDisplay,
    MenuContainer,
    MenuCards,
    OrdersList,
    CardMyOrder,
    CardContainer,
    OrdersImages,
    OrdersStatusColumn,
    OrdersInfoColumn,
    OrdersImagesColumn
}