import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Display,
    Subtitle
} from './styles'

export default class OrderDetails extends Component {
    render() {
        return (
            <Display>
                <img src='/images/tick.svg'alt='check item' style={{height: '150px', width:'150px'}}></img>
                <Subtitle style={{textDecoration: 'none'}}> Pedido concluído com sucesso! </Subtitle>
                <p>Acesse aqui <Link to='/profile' style={{textDecoration: 'none', color:'#26acb5'}}>seu perfil</Link> para acompanhar o status da sua compra!</p>
            </Display>
        )
    }
}
