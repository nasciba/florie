import axios from "axios";

export const postOrder = (
  cart,
  totalPrice,
  priceWithDelivery,
  typeOfDelivery
) => {
 return axios
    .post(
      `${process.env.REACT_APP_API_URL}/api/order`,
      { cart, totalPrice, priceWithDelivery, typeOfDelivery },
      { withCredentials: true }
    )
    .then(() => {
      console.log("Order submitted");
    })
    .catch((error) => console.log(error));
};
