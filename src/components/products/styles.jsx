import styled from 'styled-components';

const StyledIconsVertical = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 50px;
    margin-top: 50px;
    align-items: flex-start;
    justify-content: center;
    i {
        margin: 20px;
       
    }

`
const StyledCard = styled.div`
    width: 90%;
    margin: 20px 20px; 
    text-align: justify;
    border: solid gray 1px;
    border-radius: 10px;
`
export {
    StyledIconsVertical,
    StyledCard

}