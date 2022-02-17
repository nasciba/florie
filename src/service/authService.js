import axios from "axios";

const service = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  withCredentials: true,
});

const errorHandler = (error) => {
  throw error;
};


export default {
  service,

  async signUp(
    username,
    password,
    firstName,
    lastName,
    street,
    number,
    complement,
    district,
    city,
    state,
    zipcode,
    phoneNumber,
    cpf
  ) {
    return service
      .post("/signup", {
        username,
        password,
        firstName,
        lastName,
        street,
        number,
        complement,
        district,
        city,
        state,
        zipcode,
        phoneNumber,
        cpf,
      })
      .then((response) => response.data)
      .catch(errorHandler);
  },

  async login(username, password) {
    return service
      .post("/login", { username, password })
      .then((response) => response.data)
      .catch(errorHandler);
  },

  async logout() {
    return service
      .post("/logout", {})
      .then((response) => response.data)
      .catch(errorHandler);
  },

  async loggedin() {
    return service
      .get("/loggedin")
      .then((response) => response.data)
      .catch(errorHandler);
  },
};
