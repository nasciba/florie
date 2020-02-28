import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EditProduct from './EditProduct'
import axios from 'axios';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.getSingleProduct();
    }

    getSingleProduct = () => {
        const { params } = this.props.match;
        
        axios.get(`http://localhost:5000/api/products/${params.id}`, { withCredentials: true})
            .then(apiResponse => {
                const singleProduct = apiResponse.data;
                this.setState(singleProduct);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    renderEditProduct = () => {
        if(!this.state.name){
            this.getSingleProduct();
            
        } else {
            return <EditProduct theProduct={this.state} getTheProduct={this.getSingleProduct} {...this.props} />
        }
    }
    render() {
        return (
            <div>
            <h1>{this.state.name} - {this.state.brand}</h1>
            <img src={this.state.image} alt={this.state.name && this.state.brand}></img>
            <p>R${this.state.price}</p>
            <p>{this.state.description}</p>
            <div>{this.renderEditProduct()} </div> 
            <Link to={'/products'}>Lista de produtos</Link>
            {}
        </div>
        )
    }
}

export default ProductDetails;