import React, { Component } from 'react';
import axios from 'axios';
// import { StyledGreenButton } from '../buttons/styles';
import { StyledDisplay, StyledInputAuth, StyledTextAccount } from '../auth/style';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.loggedInUser._id,
            firstName: this.props.loggedInUser.firstName,
            lastName: this.props.loggedInUser.lastName,
            phoneNumber: this.props.loggedInUser.phoneNumber,
            address: {
                street: this.props.loggedInUser.address.street,
                number: this.props.loggedInUser.address.number,
                complement: this.props.loggedInUser.address.complement,
                district: this.props.loggedInUser.address.district,
                zipcode: this.props.loggedInUser.address.zipcode,
                city: this.props.loggedInUser.address.city,
                state: this.props.loggedInUser.address.state
            }
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target || '';
        const { address } = this.state;
        address[name] = value;
        this.setState({ [name]: value, address });
    }

     handleSubmit = (event) => {
        const {firstName, lastName, phoneNumber, address } = this.state;
       
        event.preventDefault();

        axios.put(`${process.env.REACT_APP_API_URL}/api/user/${this.state.id}`, { firstName, lastName, phoneNumber, address })
            .then(apiResponse => {
                console.log(apiResponse)
            })
            .catch((err) => {
                console.log(err)
            })
            this.props.history.push('/my-data');
            window.location.reload();

    }
  
    render() {
        return (
            <StyledDisplay>
                <form onSubmit={this.handleSubmit}>
                    <label>Nome:</label>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={e => this.handleChange(e)} />
                    <label>Sobrenome:</label>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={e => this.handleChange(e)} />
                    <label>Telefone:</label>
                    <input type="number" name="phoneNumber" value={this.state.phoneNumber} onChange={e => this.handleChange(e)} />
                    <label>Logradouro:</label>
                    <input type="text" name="street" value={this.state.address.street} onChange={e => this.handleChange(e)} />
                    <label>Número:</label>
                    <input type="number" name="number" value={this.state.address.number} onChange={e => this.handleChange(e)} />
                    <label>Complemento:</label>
                    <input type="text" name="complement" value={this.state.address.complement} onChange={e => this.handleChange(e)} />
                    <label>Bairro:</label>
                    <input type="text" name="district" value={this.state.address.district} onChange={e => this.handleChange(e)} />
                    <label>CEP:</label>
                    <input type="text" name="zipcode" value={this.state.address.zipcode} onChange={e => this.handleChange(e)} />
                    <label>Cidade:</label>
                    <input type="text" name="city" value={this.state.address.city} onChange={e => this.handleChange(e)} />
                    <label>Estado:</label>
                    <input type="text" name="state" value={this.state.address.state} onChange={e => this.handleChange(e)} />
                    <input type="submit" value="SALVAR"/>
                </form>
            </StyledDisplay>)
    }
}

export default EditProfile;