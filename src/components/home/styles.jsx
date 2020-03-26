import styled from 'styled-components';

const StyledDisplay = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    margin-bottom: 100px;
    padding: 0;
    
`

const StyledHeader = styled.div`
    margin: 0;
    height: 90vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    `

const StyledBox = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    img {
        height: 100%;
        width: 100%
    }
    p {
        position: absolute;
        width: 800px;
        font-size: 60px;
        letter-spacing: 10px;
        color: #black;
        left: 50px;
        top: 200px;
        font-weight: bold;
        font-family: 'Playfair Display', serif;

    }
    `

const StyledSection = styled.section`
    position: relative;
    margin: 50px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;  
    `

const StyledContainer = styled.div`
    justify-content: center;
    width: 75vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const Card = styled.div`
    margin: 60px;
    width: 355px;
    height: 500px;
    position: relative;
    text-align: center;
    
    img {
        width: 100%;
        height: 100%;
    };
    p {
        top: 50px;
        right: 25px;
        letter-spacing: 4px;
        font-family: 'Roboto', sans-serif;
        font-size: 30 px;
        color: #808080;
        font-weight: bold
    }

    `

    const StyledTitle = styled.p `
        width: 80%; 
        text-align: center; 
        font-size: 32px;
        font-weight: lighter;
        letter-spacing: 3px;
        border-bottom: 1px solid #808080; 
        line-height: 0.1em;
        margin: 10px 0 20px;
        padding-top: 50px;
        color: #808080; 
        span { 
            background:#fff; 
            padding:0 10px; 
    }
    ` 
     
export {
    StyledDisplay,
    StyledHeader,
    StyledBox,
    StyledSection,
    StyledContainer,
    Card,
    StyledTitle
}