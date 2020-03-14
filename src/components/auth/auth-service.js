import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'https://server-florie.herokuapp.com/api',
      withCredentials: true
    });
    this.service = service;
  }

  signup = (username, password, fullName, street, number, complement, city, state, zipcode, phoneNumber, cpf) => {
    return this.service.post('/signup', { username, password, fullName, street, number, complement, city, state, zipcode, phoneNumber, cpf })
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }

  logout = () => {
    return this.service.post('/logout', {})
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/loggedin')
    .then(response => response.data)
  }
}

export default AuthService;

