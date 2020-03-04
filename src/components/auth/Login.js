import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';
import { StyledDisplay, StyledTextAccount, StyledInputLogin } from './style';
import { StyledGreenButton } from '../green-button/styles'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this.service = new AuthService();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        this.service.login(username, password)
            .then(response => {
                this.setState({ username: "", password: "" });
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
                <StyledInputLogin>
                    <form onSubmit={this.handleFormSubmit}>
                        <input type="text" name="username" placeholder="Seu e-mail" value={this.state.username} onChange={e => this.handleChange(e)} />
                        <br></br>          
                        <input name="password" placeholder="Sua senha" type="password" value={this.state.password} onChange={e => this.handleChange(e)} />
                        <br></br>
                        <StyledGreenButton type="submit">LOGIN</StyledGreenButton>
                    </form>
                    <StyledTextAccount>
                        Não tem uma conta?
                    <br></br>
                        Cadastre-se <Link to={"/signup"} style={{ color: "black" }}>aqui</Link>
                    </StyledTextAccount>
                </StyledInputLogin>
            </StyledDisplay >
        )
    }
}

export default Login;