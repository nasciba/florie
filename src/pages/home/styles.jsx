import styled from 'styled-components';
import bg_home from './components/card-product-category/images/bg_home.jpg'

const StyledDisplay = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;
    margin: 0 0 100px 0;
    padding: 0;
    width: 100%;
`

const StyledHeader = styled.div`
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
   
`

const StyledBox = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(
        to right bottom, 
        rgba(255, 255, 255, 0.1), 
        rgba(250, 255, 255, 0.7)), 
        url(${bg_home});
    background-position: top;
    background-size: cover;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;

    a {
        text-decoration:none;
        display: flex;
        flex-wrap: wrap;
        color: black;
        max-width: 900px;
        font-size: 39px;
        letter-spacing: 10px;
        color: black;
        font-weight: bold;
        font-family: 'Playfair Display', serif;
    };

    @media(min-width: 769px, max-width: 1024px) {
        a {
            font-size: 40px;
            max-width: 100%;
            
        }
    };

    @media(max-width: 768px) {
        max-height: 70%;
        a {
            font-size: 25px; 
            max-width: 300px;
            display: flex; 
            flex-wrap: wrap;
        }
    }

    p {
        padding-left: 50px;
        padding-top: 10%;
    }
 
    span {
        color: #26acb5;
    }
`

const StyledSection = styled.section`
    position: relative;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: 100%   
`

const StyledProductsContainer = styled.div`
    justify-content: space-evenly;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
`

const CardProductsCategoryStyle = styled.div`
    margin: 30px 40px;
    width: 290px;
    height: 400px;
    position: relative;
    text-align: center;

    img {
        width: 70%;
        height: 70%;
        border-radius: 4px;
    };

    h3 {
    }
    
    img:hover {
        transform: scale(1.03);
    }
    
    h5 {
        margin-bottom: 20px;
        top: 50px;
        letter-spacing: 4px;
        color: #808080;
        font-weight: bold;
    }

    a {
        text-decoration: none;
    }

    @media(max-width: 768px) {
        max-width: 300px;
        
    }
`

const StyledTitle = styled.p`
        max-width:  80%; 
        display: flex;
        flex-wrap: wrap;
        text-align: center; 
        font-size: 25px;
        font-weight: lighter;
        letter-spacing: 3px;
        margin: 10px 0 20px;
        padding-top: 30px;
        color: #808080; 
    };

    @media(max-width: 768px) {
        font-size: 18px;    
    }
`

export {
    CardProductsCategoryStyle,
    StyledDisplay,
    StyledHeader,
    StyledBox,
    StyledSection,
    StyledProductsContainer,
    StyledTitle
}