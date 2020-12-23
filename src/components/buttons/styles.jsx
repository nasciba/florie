import styled from 'styled-components';

const StyledGreenButton = styled.button`
    min-width: 150px;
    min-height: 50px;
    margin: 25px 10px 10px 10px;
    padding: 10px;
    outline: none;
    border-radius: 3px;
    border: solid #26acb5 2px;
    background-color: transparent;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    color: #26acb5;
    a {
        color: #26acb5;
        text-decoration: none
    }
    &:hover {
        background: #26acb5;
        color: white;
        a {
            color: white;
        }
    }
    @media(max-width: 768px) {
        min-width: 70px;
        min-height: 45px;
        font-size: 15px;
        
    }
`


export {
    StyledGreenButton,
}