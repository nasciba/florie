import React, { Component } from 'react';
import { StyledGreenButton } from '../buttons/styles';
import { Link } from 'react-router-dom';

class MyData extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        if (this.props.loggedInUser) {
            const user = this.props.loggedInUser
            return (
                <div>
                    <h1>MEUS DADOS</h1>
                    <label>Nome:</label> <span>{user.firstName}</span>
                    <label>Sobrenome:</label> <span>{user.lastName}</span>
                    <label>Telefone:</label> <span>{user.phoneNumber}</span>
                    <label>E-mail:</label> <span>{user.username}</span>
                    <label>CPF:</label> <span>{user.cpf}</span>
                    <label>Logradouro:</label> <span>{user.address.street}</span>
                    <label>Número:</label> <span>{user.address.number}</span>
                    <label>Complemento:</label> <span>{user.address.complement}</span>
                    <label>CEP:</label> <span>{user.address.zipcode}</span>
                    <label>Cidade:</label> <span>{user.address.city}</span>
                    <label>Estado:</label> <span>{user.address.state}</span>
                    <StyledGreenButton>
                        <Link to={`/edit-profile/${user._id}`}>EDITAR DADOS</Link>
                    </StyledGreenButton>
                </div>
            )
        } else {
            return null
        }
    }
}



export default MyData