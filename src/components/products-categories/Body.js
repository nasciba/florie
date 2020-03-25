import React, { Component } from 'react'
import axios from 'axios';
import { Container } from './styles'


export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfProducts: [],
        }
    }


    getAllProducts = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/products`)
          .then(responseFromApi => {
            this.setState({
              listOfProducts: responseFromApi.data
            })
          })
      }
    render() {
        return (
          <Container>
              
          </Container>
        )
    }
}
