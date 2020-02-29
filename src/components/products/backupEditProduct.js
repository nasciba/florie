import React, { Component } from 'react';
import service from '../service';
import axios from 'axios';


class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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

    handleFormSubmit = (event) => {
        const brand = this.state.brand
        const description = this.state.description;
        const name = this.state.name;
        const price = this.state.price;
        const size = this.state.size;
        const stock = this.state.stock;
        const type = this.state.type;


        event.preventDefault();

        axios.put(`http://localhost:5000/api/products/${this.state._id}`, { name, price, brand, type, stock, description, size }, { withCredentials: true })
            .then(() => {
                service.saveNewImage(this.state)
                    .then(res => {
                        console.log('added: ', res);
                        this.props.history.push('/products-list-admin');
                    })
                    .catch(err => {
                        console.log("Error while adding the image: ", err);
                    });

                this.props.history.push('/products-list-admin');
            })
            .catch(error => console.log(error))

    }

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleChangePrice = (event) => {
        this.setState({
            price: event.target.value
        })
    }

    handleChangeBrand = (event) => {
        this.setState({
            brand: event.target.value
        })
    }

    handleChangeType = (event) => {
        this.setState({
            type: event.target.value
        })
    }

    handleChangeStock = (event) => {
        this.setState({
            stock: event.target.value
        })
    }

    handleChangeDescription = (event) => {
        this.setState({
            description: event.target.value
        })
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


    render() {
        return (
            <div>
                <h3>Editar produto</h3>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Produto:</label>
                    <input type="text" name="name" value={this.state.name} onChange={e => this.handleChangeName(e)} />
                    <label>Descrição:</label>
                    <textarea name="description" value={this.state.description} onChange={e => this.handleChangeDescription(e)} />
                    <label>Marca:</label>
                    <input type="text" name="brand" value={this.state.brand} onChange={e => this.handleChangeBrand(e)} />
                    <label>Preço:</label>
                    <input type="number" name="price" value={this.state.price} onChange={e => this.handleChangePrice(e)} />
                    <label>Estoque:</label>
                    <input type="number" name="stock" value={this.state.stock} onChange={e => this.handleChangeStock(e)} />
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