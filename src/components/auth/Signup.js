import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';
import { StyledDisplay, StyledTextAccount } from './style';
import { StyledGreenButton} from '../green-button/styles'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', street: '', number: '', complement: '', city: '', state: '', zipcode: '', phoneNumber: '', fullName: '', cpf: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const street = this.state.street
    const number = this.state.number
    const complement = this.state.complement
    const city = this.state.city
    const state = this.state.state
    const zipcode = this.state.zipcode
    const phoneNumber = this.state.phoneNumber;
    const fullName = this.state.fullName;
    const cpf = this.state.cpf


    this.service.signup(username, password, fullName, street, number, complement, city, state, zipcode, phoneNumber, cpf)
      .then(response => {
        this.setState({
          username: "",
          password: "",
          fullName: "",
          street: "",
          number: "",
          complement: "",
          city: "",
          state: "",
          zipcode: "",
          phoneNumber: "",
          cpf: "",

        });
        this.props.getUser(response)
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  render() {
    return (
      <StyledDisplay>
        <form onSubmit={this.handleFormSubmit}>
          <label>Nome completo:</label>
          <br></br>
          <input type="text" name="fullName" value={this.state.fullName} onChange={e => this.handleChange(e)} />
          <br></br>
          <br></br>
          <label>Rua/Avenida:</label>
          <br></br>
          <input type="text" name="street" value={this.state.address} onChange={e => this.handleChange(e)} />
          <br></br>
          <label>Número:</label>
          <br></br>
          <input type="number" name="number" value={this.state.address} onChange={e => this.handleChange(e)} />
          <br></br>
          <label>Complemento:</label>
          <br></br>
          <input type="text" name="complement" value={this.state.address} onChange={e => this.handleChange(e)} />
          <br></br>
          <label>Cidade:</label>
          <br></br>
          <input type="text" name="city" value={this.state.address} onChange={e => this.handleChange(e)} />
          <br></br>
          <label>Estado:</label>
          <br></br>
          <input type="text" name="state" value={this.state.address} onChange={e => this.handleChange(e)} />
          <br></br>
          <label>CEP:</label>
          <br></br>
          <input type="number" name="zipcode" value={this.state.address} onChange={e => this.handleChange(e)} />
          <br></br>
                    <label>E-mail:</label>
          <input type="email" name="username" value={this.state.username} onChange={e => this.handleChange(e)} placeholder="Insira seu e-mail" />
          <label>Telefone:</label>
          <input type="number" name="phoneNumber" value={this.state.phoneNumber} onChange={e => this.handleChange(e)} />
          <label>CPF:</label>
          <input name="cpf" type="number" value={this.state.cpf} onChange={e => this.handleChange(e)} />
          <label>Senha:</label>
          <input name="password" type="password" value={this.state.password} onChange={e => this.handleChange(e)} />

          <input type="submit" value="Signup" />
        </form>

        <p>Já tem uma conta?
            <Link to={"/login"}>Login</Link>
        </p>

        </StyledDisplay>
    )
  }
}

export default Signup