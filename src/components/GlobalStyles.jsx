import styled from 'styled-components';

const StyledTitle = styled.h1`
    letter-spacing: 5px;
    color: gray;
    text-align: center;
`
const StyledContainer = styled.div`
    margin-top: 85px;
    margin-bottom: 100px;
`
const StyledDisplayFlexRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`
const StyledDisplayFlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    
`

export {
    StyledTitle,
    StyledContainer,
    StyledDisplayFlexRow

}