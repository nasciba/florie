import React, { Component } from 'react'
import AuthService from '../auth/auth-service';
import { Link } from 'react-router-dom';

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
                <div>
                    <p>Olá! {this.props.loggedInUser.username}</p>
                    <Link to='/list-admin'>Gerenciar lista de produtos</Link>
                    <Link to='/'>
                        <button onClick={() => this.logoutUser()}>Logout</button>
                    </Link>
                    <br></br>
                </div>
            )
        }
    
            else {
                return <p>Meus pedidos</p>
            }
    }

}

