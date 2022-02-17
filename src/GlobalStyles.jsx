import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'


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

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }
  
  body {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;

export {
    StyledTitle,
    StyledContainer,
    StyledDisplayFlexRow,
    GlobalStyles

}