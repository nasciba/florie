import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StyledGreenButton } from '../buttons/styles';
import { StyledDisplay, StyledInputAuth, StyledTextAccount, StyledRow } from '../auth/style'


class MyData extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        if (this.props.loggedInUser) {
            const user = this.props.loggedInUser
            return (
                <StyledDisplay>
                    <StyledInputAuth>
                        <StyledTextAccount>Meus dados</StyledTextAccount>
                        <dl>
                            <StyledRow>
                                <dt>Nome:</dt>
                                <dd>{user.firstName}</dd>
                            </StyledRow>
                            <StyledRow>
                                <dt>Sobrenome:</dt>
                                <dd>{user.lastName}</dd>
                            </StyledRow>
                            <StyledRow>
                                <dt>Telefone:</dt>
                                <dd>{user.phoneNumber}</dd>
                            </StyledRow>
                            <StyledRow>
                                <dt>E-mail:</dt>
                                <dd>{user.username}</dd>
                            </StyledRow>
                            <StyledRow>
                                <dt>CPF:</dt>
                                <dd>{user.cpf}</dd>
                            </StyledRow>
                            <StyledRow>
                                <dt>Logradouro:</dt>
                                <dd>{user.address.street}</dd>
                            </StyledRow>
                            <StyledRow>
                                <dt>Número:</dt>
                                <dd>{user.address.number}</dd>
                            </StyledRow>
                            <StyledRow>
                                <dt>Complemento:</dt>
                                <dd>{user.address.complement}</dd>
                            </StyledRow>
                            <StyledRow>
                                <dt>CEP:</dt>
                                <dd>{user.address.zipcode}</dd>
                            </StyledRow>
                            <StyledRow>
                                <dt>Cidade:</dt>
                                <dd>{user.address.city}</dd>
                            </StyledRow>
                            <StyledRow>
                                <dt>Estado:</dt>
                                <dd>{user.address.state}</dd>
                            </StyledRow>
                        </dl>
                    </StyledInputAuth>
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