import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer'
import { StyledDisplay, StyledInputAuth, StyledTextAccount } from './style';
import { StyledGreenButton } from '../buttons/styles'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', street: '', number: '', complement: '', district: '', city: '', state: '', zipcode: '', phoneNumber: '', firstName: '', lastName: '', cpf: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const street = this.state.street;
    const number = this.state.number;
    const complement = this.state.complement;
    const district = this.state.district;
    const city = this.state.city;
    const state = this.state.state;
    const zipcode = this.state.zipcode;
    const phoneNumber = this.state.phoneNumber;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const cpf = this.state.cpf


    this.service.signup(username, password, firstName, lastName, street, number, complement, district, city, state, zipcode, phoneNumber, cpf)
      .then(response => {
        this.setState({
          username: '',
          password: '',
          firstName: '',
          lastName: '',
          street: '',
          number: '',
          complement: '',
          district: '',
          city: '',
          state: '',
          zipcode: '',
          phoneNumber: '',
          cpf: '',
        });
        this.props.getUser(response);
        this.props.history.push('/profile');
        alert('Conta criada com sucesso!')
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  render() {
    return (
      <React.Fragment>
      <StyledDisplay>
        <StyledInputAuth>
          <StyledTextAccount>Faça aqui seu cadastro ;)</StyledTextAccount>
          <form onSubmit={this.handleFormSubmit}>
            <label>E-mail:</label>
            <br></br>
            <input type="email" name="username" value={this.state.username} onChange={event => this.handleChange(event)} />
            <br></br>
            <label>Nome:</label>
            <br></br>
            <input type="text" name="firstName" value={this.state.firstName} onChange={event => this.handleChange(event)} />
            <br></br>
            <label>Sobrenome:</label>
            <br></br>
            <input type="text" name="lastName" value={this.state.lastName} onChange={event => this.handleChange(event)} />
            <br></br>
            <label>Telefone:</label>
            <br></br>
            <input type="number" name="phoneNumber" value={this.state.phoneNumber} onChange={event => this.handleChange(event)} />
            <br></br>
            <label>CPF:</label>
            <br></br>
            <input name="cpf" type="number" value={this.state.cpf} onChange={event => this.handleChange(event)} />
            <br></br>
            <label>Rua/Avenida:</label>
            <br></br>
            <input type="text" name="street" value={this.state.address} onChange={event => this.handleChange(event)} />
            <br></br>
            <label>Número:</label>
            <br></br>
            <input type="number" name="number" value={this.state.address} onChange={event => this.handleChange(event)} />
            <br></br>
            <label>Complemento (apto, bloco, etc.):</label>
            <br></br>
            <input type="text" name="complement" value={this.state.address} onChange={event => this.handleChange(event)} />
            <br></br>
            <br></br>
            <label>Bairro:</label>
            <br></br>
            <input type="text" name="district" value={this.state.address} onChange={event => this.handleChange(event)} />
            <br></br>
            <label>Cidade:</label>
            <br></br>
            <input type="text" name="city" value={this.state.address} onChange={event => this.handleChange(event)} />
            <br></br>
            <label>Estado:</label>
            <br></br>
            <input type="text" name="state" value={this.state.address} onChange={event => this.handleChange(event)} />
            <br></br>
            <label>CEP:</label>
            <br></br>
            <input type="number" name="zipcode" value={this.state.address} onChange={event => this.handleChange(event)} />
            <br></br>
            <label>Senha:</label>
            <br></br>
            <input name="password" type="password" placeholder="pelo menos 7 caracteres :D" value={this.state.password} onChange={event => this.handleChange(event)} />
            <br></br>
            <StyledGreenButton type="submit">CRIAR CONTA</StyledGreenButton>
          </form>

          <p>Já tem uma conta?</p>
          <p><Link to={"/login"} style={{ color: "black" }}>Login</Link></p>
        </StyledInputAuth>
      </StyledDisplay>
      <Footer/>
      </React.Fragment>
    )
  }
}

export default Signup;