import axios from "axios";

const getSingleProduct = async (pathname) => {
    try {
      const request = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/${pathname}`,
        {
          withCredentials: true,
        }
      );
      const singleProduct = request.data;
      return singleProduct;
    } catch (error) {
      throw error;
    }
  };

  export default getSingleProduct