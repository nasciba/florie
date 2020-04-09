import styled from 'styled-components';

const Display = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 80vh;
    padding-bottom: 100px;
    background-color: light-gray;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: 10px;
    font-family: 'Roboto', sans-serif;

`

const Title = styled.p`
    width: 20%; 
    text-align: center; 
    font-size: 32px;
    font-weight: lighter;
    letter-spacing: 3px;
    line-height: 0.1em;
    margin: 10px 0 20px;
    padding-top: 50px;
    color: #808080; 
    span { 
        background:#fff; 
        padding:0 10px; 
}
`
const Subtitle = styled.p`
    text-align: center; 
    font-size: 28px;
    font-weight: lighter;
    letter-spacing: 3px;
    margin: 10px 0 20px;
    padding-top: 50px;
    color: #808080;
`
const HalfScreenContainer = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;    
    margin: 20px;
    padding-bottom: 20px;
    
`
const BoxCard = styled.div`
    width: 650px;
    border: solid lightgray 2px;
    border-radius: 8px;
    margin-bottom: 20px;       
               
`
const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    flex-wrap: wrap;
    margin: 0;  
`
const CardImage = styled.div`
    width: 18%;
    margin-left: 5px;
    padding-left:30px;
    display: flex;
    flex-direction:column;
    justify-content: left;
    align-items: center;
    img {
        margin: 20px;
        height: 90%;
        width: 90%
    }
`

const CardText = styled.div`
    padding: 15px;
    margin-left: 20px;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: left;
    
    justify-content: center;
    p, form {
        margin: 0px;
        text-align: left;
    }
       
`
const CardDelivery = styled.div`
    width: 650px;
    border: solid lightgray 2px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
    h4, p, form {
    margin: 20px;
    text-align: center;
    display: flex;
    line-spacing: 1;
    flex-direction: column;
    }
`

export {
    Display,
    Container,
    HalfScreenContainer,
    Title,
    Subtitle,
    Card,
    CardImage,
    CardText,
    CardDelivery,
    BoxCard   
}




