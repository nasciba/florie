import styled from 'styled-components';

const StyledDisplay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 25px;  
    min-height: 80vh;
    input {
        text-align: center;
    }
    `
    const StyledInputAuth = styled.div`
    
    font-family: Roboto;
    letter-spacing: 1px;
    border: solid gray 2px;
    border-radius: 8px;
    // color: gray;
    display: flex;
    flex-direction: column;
    button {
        align-item: center
    }
    span {
        margin: 15px;
        a {
            color: gray;
            text-decoration: none;
        }
    }
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
    label {
        min-width: 400px;
        text-align: center;
        color: black;
        font-size: 25px;     
    };
    form {
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`

const StyledTextAccount = styled.h3`
    color: gray;
    margin-top: 15 0 0 0; 
`
const StyledRow = styled.div`
    display: flex;
    text-align: left;
    flex-direction: row;
    margin: 10px 25px 10px 25px; 
    
    dt {
        width: 200px;
    }
    dd {
        min-width: 450px;
        border-bottom: solid lightgray 2px;
    }
`
export {
    StyledDisplay,
    StyledTextAccount,
    StyledInputAuth,
    StyledRow
}