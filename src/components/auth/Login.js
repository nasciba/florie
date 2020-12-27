import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer'
import { StyledDisplay, StyledInputAuth, StyledTextAccount } from './style';
import { StyledGreenButton } from '../buttons/styles'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.service = new AuthService();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        this.service.login(username, password)
            .then(response => {
                this.setState({ username: "", password: "" });
                this.props.getUser(response);
                sessionStorage.setItem('loggedUser', JSON.stringify(response));
                this.props.history.push(`${this.props.location.state.from.pathname}`);
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
                        <StyledTextAccount>Acesse sua conta aqui ;)</StyledTextAccount>
                        <form onSubmit={this.handleFormSubmit}>
                            <input type="text" name="username" placeholder="Seu e-mail" value={this.state.username} onChange={event => this.handleChange(event)} />
                            <input name="password" placeholder="Sua senha" type="password" value={this.state.password} onChange={event => this.handleChange(event)} />
                            <StyledGreenButton type="submit">ENTRAR</StyledGreenButton>
                            <StyledGreenButton><Link to={"/signup"}>CADASTRAR</Link></StyledGreenButton>
                        </form>
                         
                    </StyledInputAuth>
                </StyledDisplay>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Login;