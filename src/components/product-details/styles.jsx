import styled from 'styled-components';

const StyledDisplay = styled.div`
    display: flex;
    padding-bottom: 20px;
    margin-top: 120px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-items: start;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

const StyledImgProduct = styled.div`
    //min-height: 600px;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 30%;
    max-height: 40%;
    img {
        height: 90%;
        width: 80%;
      
    }
    
`
const StyledProductDetails = styled.div`
    margin-top: 50px;
    display: flex;
    max-width: 1000px;
    min-height: 600px;  
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 16px;
    p {
        text-align: center;
        margin: 15px;
        line-height: 25px;
    }
    h4 {
        margin: 15px;
    }
  
`

const StyledTitle = styled.p`
    font-size: 35px;
    font-weight: bold;
    text-transform: uppercase;
    color: black;
    
`

const StyledDetailsText = styled.div`
    font-size: 30px;
    color: gray;
    text-align: center;
    margin: 10px 60px;
    padding: 35px 80px;
`



export {
    StyledDisplay,
    StyledTitle,
    StyledImgProduct,
    StyledProductDetails,
    StyledDetailsText,
    

}

