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
const StyledSubtitle = styled.h2`
    text-align: center; 
    font-weight: lighter;
    letter-spacing: 3px;
    margin: 35px 0;
    color: #808080;
`
const StyledColumn = styled.div`
    min-width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;    
    margin: 0 20px;
    
    @media(max-width: 1258px) {
        width: 100%;
    }
`
const BoxCard = styled.div`
    width: 650px;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    flex-wrap: wrap;
    border: solid lightgray 2px;
    border-radius: 5px;
    margin-bottom: 20px;  

    @media(max-width: 1258px) {
        width: 100%;
    }   
    
               
`

    const Card = styled.div`
        display: flex;
        
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
        height: auto;
        width: 80%;
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
    width: 100%;
    border: solid lightgray 2px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
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
    StyledColumn,
    Title,
    StyledSubtitle,
    Card,
    CardImage,
    CardText,
    CardDelivery,
    BoxCard   
}




