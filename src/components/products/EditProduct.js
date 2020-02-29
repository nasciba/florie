import React, { Component } from 'react';
import service from '../service';
import axios from 'axios';


class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', description: '', brand: '', price:'', stock:'', image: ''}
    }

    componentDidMount() {
        this.getSingleProduct();
    }

    getSingleProduct = () => {
        const { params } = this.props.match;
        axios.get(`http://localhost:5000/api/products/${params.id}`, { withCredentials: true })
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
        console.log('console do state ', this.state)
        service.updateProduct(this.state)
            .then(res => {
                console.log('added: ', res);
                this.props.history.push('/products-list-admin');
            })
            .catch(err => {
                console.log("Error while adding the image: ", err);
            });

    }


    render() {
        return (
            <div>
                <h3>Editar produto</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Produto:</label>
                    <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
                    <label>Descrição:</label>
                    <textarea name="description" value={this.state.description} onChange={e => this.handleChange(e)} />
                    <label>Marca:</label>
                    <input type="text" name="brand" value={this.state.brand} onChange={e => this.handleChange(e)} />
                    <label>Preço:</label>
                    <input type="number" name="price" value={this.state.price} onChange={e => this.handleChange(e)} />
                    <label>Estoque:</label>
                    <input type="number" name="stock" value={this.state.stock} onChange={e => this.handleChange(e)} />
                    <input
                        type="file" name="imageUrl"
                        onChange={(e) => this.handleFileUpload(e)} />
                    <input type="submit" value="Salvar" />
                </form>

            </div>
        )
    }
}

export default EditProduct;