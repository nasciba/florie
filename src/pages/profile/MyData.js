import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StyledGreenButton } from '../../components/buttons/styles';
import { StyledBorder, StyledData, StyledDisplay, StyledTitle } from './styles'


class MyData extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.loggedInUser) {
            const user = this.props.loggedInUser
            return (
                <StyledDisplay>
                        <StyledTitle>DADOS PESSOAIS</StyledTitle>
                    <StyledBorder>
                        <StyledData>
                            <label>Nome:</label>
                            <span>{user.firstName}</span>
                        </StyledData>
                        <StyledData>
                            <label>Sobrenome:</label>
                            <span>{user.lastName}</span>
                        </StyledData>
                        <StyledData>
                            <label>Telefone:</label>
                            <span>{user.phoneNumber}</span>
                        </StyledData>
                        <StyledData>
                            <label>E-mail:</label>
                            <span>{user.username}</span>
                        </StyledData>
                        <StyledData>
                            <label>CPF:</label>
                            <span>{user.cpf}</span>
                        </StyledData>
                        <StyledData>
                            <label>Rua/Avenida:</label>
                            <span>{user.address.street}</span>
                        </StyledData>
                        <StyledData>
                            <label>Número:</label>
                            <span>{user.address.complement}</span>
                        </StyledData>
                        <StyledData>
                            <label>Complemento:</label>
                            <span>{user.address.street}</span>
                        </StyledData>
                        <StyledData>
                            <label>Bairro:</label>
                            <span>{user.address.district}</span>
                        </StyledData>
                        <StyledData>
                            <label>CEP:</label>
                            <span>{user.address.zipcode}</span>
                        </StyledData>
                        <StyledData>
                            <label>Cidade:</label>
                            <span>{user.address.city}</span>
                        </StyledData>
                        <StyledData>
                            <label>Estado:</label>
                            <span>{user.address.state}</span>
                        </StyledData>
                    </StyledBorder>
                    <StyledGreenButton>
                            <Link to={`/edit-profile/${user._id}`}>EDITAR DADOS</Link>
                        </StyledGreenButton>
                </StyledDisplay>
            )
        } else {
            return null
        }
    }
}



export default MyData