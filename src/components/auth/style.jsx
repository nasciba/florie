import styled from 'styled-components';

const StyledDisplay = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-size: 30px;
    text-align: center;
    
`
const StyledInputLogin = styled.div`
    input {
        border: none;
        text-align:center;
        border-bottom: solid black 2px;
        min-width: 400px;
        margin: 20px;
        padding: 20px;
        text-align:center;
        font-size: 25px;
        outline: none;
};
    label {
        margin: 25px;   
}
`

const StyledInputAccount = styled.div`
input {
    border-radius: 8px;
    border: solid black 2px;
    min-width: 400px;
    margin: 20px;
    padding: 20px;
    
};
`
const StyledTextAccount = styled.p`
    font-size: 22px;
    margin-top: 15 0 0 0;
   
`

export {
    StyledDisplay,
    StyledTextAccount,
    StyledInputLogin,
    StyledInputAccount
}