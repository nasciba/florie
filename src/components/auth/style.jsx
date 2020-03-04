import styled from 'styled-components';

const StyledDisplay = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    text-align: center;
    font-size: 25px;    
    
    
`
const StyledInputAuth = styled.div`
    border: solid gray 2px;
    border-radius: 8px;
    margin: 30px;
    color: gray;
    label {
        // padding-top: 60px;
        // text-align: left;
    };
    input {
        border-radius: 8px;
        border: solid gray 2px;
        min-width: 400px;
        margin: 20px;
        padding: 20px; 
        text-align: center;
        color: black;
        font-size: 25px;     
    };
     


`
const StyledTextAccount = styled.h3`
    color: black;
    margin-top: 15 0 0 0;
   
`

export {
    StyledDisplay,
    StyledTextAccount,
    StyledInputAuth
}