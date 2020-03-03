import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class ProductsList extends Component {
    constructor() {
        super();
        this.state = {
            listOfProducts: [],
        };

    }

    getAllProducts = () => {
        axios.get('http://localhost:5000/api/products')
            .then(responseFromApi => {
                this.setState({
                    listOfProducts: responseFromApi.data
                })
            })
    }

    componentDidMount() {
        this.getAllProducts();
    }


    deleteProduct = (productId) => {
        axios.delete(`http://localhost:5000/api/products/${productId}`)
            .then(responseFromApi => {
                console.log(responseFromApi);
                if (responseFromApi.status === 200) {
                    for (let i = 0; i < this.state.listOfProducts.length; i += 1) {
                        if (this.state.listOfProducts[i]._id === productId) {
                            console.log("entrou")
                            this.state.listOfProducts.splice(i, 1);
                        }
                    };
                    this.props.history.push('/products-list-admin');
                }
                else {
                    alert("Erro: O produto não foi deletado")
                }
            })

            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                {this.state.listOfProducts.map(product => {
                    return (
                        <div key={product._id}>
                            <Link to={`/products-list-admin/${product._id}`}>
                                <img src={product.imageUrl} alt={product.title && product.brand}></img>
                            </Link>
                            <h6>Produto: {product.name}</h6>
                            <p>Descrição: {product.description}</p>
                            <h6>Marca:{product.brand}</h6>
                            <h6>Preço: R${product.price}</h6>
                            <h6>Estoque: {product.stock}</h6>
                            <Link to={`/edit-product/${product._id}`}>
                                Editar Produto
                            </Link>
                            <button onClick={() => this.deleteProduct(product._id)}>Remover produto</button>
                        </div>

                    )
                })}

            </div>
        )
    }
}
