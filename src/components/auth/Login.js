import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';

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
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>E-mail:</label>
                    <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
                    <label>Senha:</label>
                    <input name="password" type="password" value={this.state.password} onChange={e => this.handleChange(e)} />
                    <input type="submit" value="Login" />
                </form>
                <p>Não tem uma conta? <Link to={"/signup"}>Cadastre-se agora</Link>
                </p>
            </div>
        )
    }
}

export default Login;