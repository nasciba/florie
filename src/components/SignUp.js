import React, { Component } from 'react';
import Button from './Button'

class SignUp extends Component {
    render() {
        return (
            <form>
                <label>Insira seu e-mail</label>
                <input type="email" placeholder="Insira seu e-mail"></input>
                <Button name="Enviar"/>
            </form>
        )
    }
}

export default SignUp;