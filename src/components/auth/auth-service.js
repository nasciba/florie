import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/api',
      withCredentials: true
    });
    this.service = service;
  }

  signup = (username, password, fullName, street, number, complement, city, state, zipcode, phoneNumber, cpf) => {
    return this.service.post('/signup', { username, password, fullName, street, number, complement, city, state, zipcode, phoneNumber, cpf })
    .then(response => response.data)
  }

}

export default AuthService;