import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class ProductsList extends Component {
    constructor() {
        super();
        this.state = { listOfProducts: [] };
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

    render() {
        return (
            <div>
                {this.state.listOfProducts.map(product => {
                    return (
                        <div key={product._id}>
                            <Link to={`/products-list-admin/${product._id}`}>
                                <img src={product.image} alt={product.title && product.brand}></img>
                            </Link>

                            <h3>{product.title}</h3>
                            <h3>{product.brand}</h3>
                            <h3>R${product.price.toString()}</h3>
                            <p>{product.description}</p>
                        </div>

                    )
                })}

            </div>
        )
    }
}
