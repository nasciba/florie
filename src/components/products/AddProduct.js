import React, { Component } from 'react';
import service from '../service';


class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "",
            description: "",
            name: "",
            price: "",
            stock: "",
            type: "",
            imageUrl: ""
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleFileUpload = e => {
        console.log("The file to be uploaded is: ", e.target.files[0]);

        const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0]);

        service.handleUpload(uploadData)
            .then(response => {
                this.setState({ imageUrl: response.secure_url });
            })
            .catch(err => {
                console.log("Error while uploading the file: ", err);
            });
    }

    handleSubmit = e => {
        e.preventDefault();

        service.saveNewProduct(this.state)
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
                <h3>Inserir novo produto</h3>
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
                    <label>Tipo:</label>
                    <input type="text" name="type" value={this.state.type} onChange={e => this.handleChange(e)} />
                    <input
                        type="file" name="imageUrl" 
                        onChange={(e) => this.handleFileUpload(e)} />
                    <input type="submit" value="Salvar" />
                </form>
            </div>
        )
    }
}


export default AddProduct;