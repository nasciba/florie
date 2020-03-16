import React, { Component } from 'react'
import AuthService from '../auth/auth-service';
import { Link } from 'react-router-dom';
import { StyledGreenButton } from '../buttons/styles'
import { StyledDisplay } from './styles'

export default class Profile extends Component {

    constructor(props) {
        super(props);

        console.log('aquis as props profile', props);
        this.state = { loggedInUser: null };
        this.service = new AuthService();
    }

    logoutUser = () => {
        this.service.logout()
            .then(() => {
                this.setState({ loggedInUser: null });
                this.props.history.push('/');
                this.props.rest.getUser(null);
            })
    }

    componentDidMount() {
        console.log('atualizou')
    }
    render() {
        if (this.props.loggedInUser.admin) {

            return (
                <StyledDisplay>
                    <h2>Olá, <span style={{fontWeight: 'bold'}}>{this.props.loggedInUser.username}</span>!</h2>
                    <StyledGreenButton> <Link to='/add-product' style={{ textDecoration: 'none', color: ' #26acb5' }}>ADICIONAR NOVO PRODUTO</Link></StyledGreenButton>
                    <StyledGreenButton> <Link to='/list-admin' style={{ textDecoration: 'none', color: ' #26acb5' }}>LISTA DE PRODUTOS</Link></StyledGreenButton>
                    <Link to='/'>
                        <StyledGreenButton onClick={() => this.logoutUser()}>LOGOUT</StyledGreenButton>
                    </Link>
                </StyledDisplay>
            )
        }
    
            else {
                return(
                    <StyledDisplay>
                        <h2>MEUS PEDIDOS</h2>
                    </StyledDisplay>
                )
            }
    }

}

