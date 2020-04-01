import React, { Component } from 'react';
import service from '../service';
import axios from 'axios';
import { StyledDisplay, StyledInputAuth, StyledTextAccount } from '../auth/style';
// import { Link } from 'react-router-dom'
// import { StyledGreenButton } from '../buttons/styles'

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', phoneNumber: '', password: '', firstName: '', lastName: '' },
        
    }

    componentDidMount() {
        this.getProfile();
    }

    getProfile = (id) => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/user/${id}`, { withCredentials: true })
            .then(apiResponse => {
                const profile = apiResponse.data;
                this.setState(profile);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleChange = (event) => {

        const { name, value } = event.target || '';

        this.setState({ [name]: value });
    }

   



    handleSubmit = (event) => {

        event.preventDefault();
        service.updateProduct(this.state)
            .then(res => {
                console.log('added: ', res);
                this.props.history.push('/profile');
            })
            .catch(err => {
                console.log("Error while adding the image: ", err);
            });

    }


    render() {
        return (
            <StyledDisplay>
                <p>teste</p>
            </StyledDisplay>)
    }
}

export default EditProfile;