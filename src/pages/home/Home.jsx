import React from "react";
import { apiRequestProducts } from "./service/service";
import HomeView from "./HomeView";
import theme from "./Theme";
import { ThemeProvider } from "@material-ui/styles";
import { StyledPageContainer, StyledContentWrap } from "./App-Styled";
import CircularProgress from "@material-ui/core/CircularProgress";

const Home = ({ listOfProducts }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  //const [listOfProducts, setListOfProducts] = React.useState([]);

  /*  const getAllProducts = async () => {
    try {
      setIsLoading(true);
      const products = await apiRequestProducts();
      setListOfProducts(products);
    } catch (error) {
      console.error("Erro setando estado:", error);
    } finally {
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    getAllProducts();
  }, []); 
  */

  if (isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <StyledPageContainer>
          <CircularProgress color="primary" />
        </StyledPageContainer>
      </ThemeProvider>
    );
  }
  return <HomeView listOfProducts={listOfProducts} />;
};

export default Home;
