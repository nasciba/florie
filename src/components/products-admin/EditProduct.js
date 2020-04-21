import React, { Component } from 'react';
import service from '../service';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { StyledDisplay, StyledInputAuth, StyledTextAccount } from '../auth/style';
import { StyledGreenButton } from '../buttons/styles'

class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', description: '', brand: '', price: '', stock: '', image: '' }
    }

    componentDidMount() {
        this.getSingleProduct();
    }

    getSingleProduct = () => {
        const { params } = this.props.match;
        axios.get(`${process.env.REACT_APP_API_URL}/api/products/${params.id}`, { withCredentials: true })
            .then(apiResponse => {
                const singleProduct = apiResponse.data;
                this.setState(singleProduct);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleChange = (event) => {

        const { name, value } = event.target || '';

        this.setState({ [name]: value });
    }

    handleFileUpload = e => {
        console.log("The file to be uploaded is: ", e.target.files[0]);

        const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0]);

        service.handleUpload(uploadData)
            .then(response => {
                console.log('esta é a: ', response)
                this.setState({ imageUrl: response.secure_url });
            })
            .catch(err => {
                console.log("Error while uploading the file: ", err);
            });
    }



    handleSubmit = (event) => {

        event.preventDefault();
        service.updateProduct(this.state)
            .then(res => {
                console.log('added: ', res);
                this.props.history.push('/list-admin');
            })
            .catch(err => {
                console.log("Error while adding the image: ", err);
            });

    }


    render() {
        return (
            <StyledDisplay>
                <StyledInputAuth>
                    <StyledTextAccount>EDITAR PRODUTO</StyledTextAccount>
                    <form onSubmit={this.handleSubmit}>
                        <label>Produto:</label>
                        <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
                        <label>Descrição:</label>
                        <input name="description" value={this.state.description} onChange={e => this.handleChange(e)} />
                        <label>Marca:</label>
                        <input type="text" name="brand" value={this.state.brand} onChange={e => this.handleChange(e)} />
                        <label>Preço:</label>
                        <input type="number" name="price" value={this.state.price} onChange={e => this.handleChange(e)} />
                        <label>Estoque:</label>
                        <input type="number" name="stock" value={this.state.stock} onChange={e => this.handleChange(e)} />
                        <input type="file" name="imageUrl" onChange={(e) => this.handleFileUpload(e)} />
                        <StyledGreenButton> <Link to='/list-admin' style={{ textDecoration: 'none', color: ' #26acb5' }}>CANCELAR</Link></StyledGreenButton>
                        <StyledGreenButton type="submit">SALVAR</StyledGreenButton>
                    </form>
                </StyledInputAuth>
            </StyledDisplay>)
    }
}

export default EditProduct;