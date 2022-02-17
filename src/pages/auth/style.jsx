import styled from "styled-components";

const StyledDisplay = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  text-align: center;
  font-size: 18px;
  margin-top: 60px;
  input {
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const StyledInputAuth = styled.div`
    letter-spacing: 1px;
    border: solid lightgray 2px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
    flex-wrap: wrap;    
    margin-top: 30px;

    button {
        margin: 5px 0 15px 0;
        width: 50%
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
        border: solid lightgray 2px;
        min-width: 120px;
        margin: 10px;
        padding: 10px; 
        text-align: center;
        color: gray;
        font-size: 15px;     
    };

    label {
        min-width: 400px;
        text-align: center;
        color: black;
        font-size: 18px;     
    };

    form {
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media(max-width:768px) {
        width: 80%;
        input {
            font-size: 16px;
            width: 70%;
        };
        label {
            font-size: 16px;
        }
    };

`;

const StyledTextAccount = styled.h3`
  color: gray;
  margin: 25px;
`;

/*const StyledRow = styled.div`
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
`*/
export { StyledDisplay, StyledTextAccount, StyledInputAuth };
