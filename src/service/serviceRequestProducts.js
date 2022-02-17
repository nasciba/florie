import axios from "axios";

export const apiRequestProducts = () => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/api/products`)
    .then((response) => {
      const listOfProducts = response.data;
      return listOfProducts;
    })
    .catch((error) => {
      throw error;
    });
};
