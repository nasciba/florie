import React, { Component } from 'react';
import service from '../service';
import { StyledDisplay, StyledInputAuth, StyledTextAccount } from '../auth/style';
import { StyledGreenButton } from '../buttons/styles'


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
                this.props.history.push('/list-admin');
            })
            .catch(err => {
                console.log("Error while adding the image: ", err);
            });
    }

    componentDidMount() {
        console.log(this.props)
    }
    render() {
        if (this.props.loggedInUser.admin)  {
        return (
            <StyledDisplay>
                <StyledInputAuth>
                    <StyledTextAccount>INSERIR NOVO PRODUTO</StyledTextAccount>
                    <form onSubmit={this.handleSubmit}>
                        <label>Produto:</label>
                        <br></br>
                        <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
                        <br></br>
                        <label>Descrição:</label>
                        <br></br>
                        <input name="description" value={this.state.description} onChange={e => this.handleChange(e)} />
                        <br></br>
                        <label>Marca:</label>
                        <br></br>
                        <input type="text" name="brand" value={this.state.brand} onChange={e => this.handleChange(e)} />
                        <br></br>
                        <label>Preço:</label>
                        <br></br>
                        <input type="number" name="price" value={this.state.price} onChange={e => this.handleChange(e)} />
                        <br></br>
                        <label>Estoque:</label>
                        <br></br>
                        <input type="number" name="stock" value={this.state.stock} onChange={e => this.handleChange(e)} />
                        <br></br>
                        <label>Tipo:</label>
                        <br></br>
                        <input type="text" name="type" value={this.state.type} onChange={e => this.handleChange(e)} />
                        <br></br>
                        <input
                            type="file" name="imageUrl"
                            onChange={(e) => this.handleFileUpload(e)} />
                        <br></br>
                        <StyledGreenButton type="submit">SALVAR</StyledGreenButton>
                    </form>
                </StyledInputAuth>
            </StyledDisplay>)
        }
        else {
            return(
            <StyledDisplay>
                <StyledTextAccount>Você não tem acesso a esta área do site!</StyledTextAccount>
            </StyledDisplay>
            )
        }
    }
}


export default AddProduct;