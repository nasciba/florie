import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Display,
    StyledSubtitle
} from './styles'

export default class OrderDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.rest.emptyCart();
    }

    render() {
        return (
            <Display>
                <img src={require('../../assets/images/tick.svg')} alt='check item' style={{height: '150px', width:'150px'}}></img>
                <StyledSubtitle style={{textDecoration: 'none'}}> Pedido concluído com sucesso! </StyledSubtitle>
                <p>Acesse aqui <Link to='/profile' style={{textDecoration: 'none', color:'#26acb5'}}>seu perfil</Link> para acompanhar o status da sua compra!</p>
            </Display>
        )
    }
}
