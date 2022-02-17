import axios from "axios";

const getSingleProduct = async (param) => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/api/products/${param.id}`, {
      withCredentials: true,
    })
    .then((apiResponse) => {
      const singleProduct = apiResponse.data;
     return singleProduct
    })
    .catch((error) => {
      throw error;
    });
};

export default getSingleProduct;
