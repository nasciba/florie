import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
    StyledDisplay, StyledTitle, StyledHeader, StyledSection, StyledContainer, StyledBox, Card
} from './styles'
import {
    StyledCardProduct, StyledTextTitle, StyledTextBrand, StyledPrice, StyledMessage
} from '../catalog-all-products/styles';
import { StyledGreenButton } from '../buttons/styles';


class Home extends Component {
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

    componentDidMount() {
        this.getAllProducts();
    }

    render() {
        return (
            <StyledDisplay>
                <StyledHeader>
                    <StyledBox>
                        <Link to='/catalog' style={{ textDecoration: 'none', color: 'black' }}><p>os melhores cosméticos <span style={{color:'#26acb5'}}>orgânicos</span></p></Link>
                        <img src="/images/home2.jpg" alt="rosas"></img>
                    </StyledBox>
                </StyledHeader>
                <StyledSection>
                    <StyledTitle><span>DESTAQUES</span></StyledTitle>
                    <StyledContainer>
                        {this.state.listOfProducts.filter(product => {
                            return (product._id === "5e7c9ae793d2160024e66ffa")
                        }).map(filteredProduct => {
                            return (
                                <StyledCardProduct key={filteredProduct._id}>
                                    <Link to={`/products/${filteredProduct._id}`}>
                                        <img src={filteredProduct.imageUrl} alt={filteredProduct.title && filteredProduct.brand}></img>
                                    </Link>
                                    <StyledTextTitle>{filteredProduct.name}</StyledTextTitle>
                                    <StyledTextBrand>
                                        {filteredProduct.brand}
                                    </StyledTextBrand>
                                    <StyledPrice>
                                        R${parseFloat(filteredProduct.price).toFixed(2).replace('.', ',')}
                                    </StyledPrice>
                                    <StyledGreenButton onClick={() => { this.props.addItemToCart(filteredProduct._id) }}>ADICIONAR AO CARRINHO</StyledGreenButton>
                                    {filteredProduct.stock <= 5 && filteredProduct.stock >= 2 ? <StyledMessage> Últimas {filteredProduct.stock} unidades   </StyledMessage> : null}
                                    {filteredProduct.stock === 1 ? <StyledMessage> Última unidade!   </StyledMessage> : null}
                                </ StyledCardProduct>

                            )
                        })
                        }
                        {this.state.listOfProducts.filter(product => {
                            return (product._id === "5e7ca91293d2160024e6700f")
                        }).map(filteredProduct => {
                            return (
                                <StyledCardProduct key={filteredProduct._id}>
                                    <Link to={`/products/${filteredProduct._id}`}>
                                        <img src={filteredProduct.imageUrl} alt={filteredProduct.title && filteredProduct.brand}></img>
                                    </Link>
                                    <StyledTextTitle>{filteredProduct.name}</StyledTextTitle>
                                    <StyledTextBrand>
                                        {filteredProduct.brand}
                                    </StyledTextBrand>
                                    <StyledPrice>
                                        R${parseFloat(filteredProduct.price).toFixed(2).replace('.', ',')}
                                    </StyledPrice>
                                    <StyledGreenButton onClick={() => { this.props.addItemToCart(filteredProduct._id) }}>ADICIONAR AO CARRINHO</StyledGreenButton>
                                    {filteredProduct.stock <= 5 && filteredProduct.stock >= 2 ? <StyledMessage> Últimas {filteredProduct.stock} unidades   </StyledMessage> : null}
                                    {filteredProduct.stock === 1 ? <StyledMessage> Última unidade!   </StyledMessage> : null}
                                </ StyledCardProduct>

                            )
                        })
                        }
                        {this.state.listOfProducts.filter(product => {
                            return (product._id === "5e7c95ce93d2160024e66ff2")
                        }).map(filteredProduct => {
                            return (
                                <StyledCardProduct key={filteredProduct._id}>
                                    <Link to={`/products/${filteredProduct._id}`}>
                                        <img src={filteredProduct.imageUrl} alt={filteredProduct.title && filteredProduct.brand}></img>
                                    </Link>
                                    <StyledTextTitle>{filteredProduct.name}</StyledTextTitle>
                                    <StyledTextBrand>
                                        {filteredProduct.brand}
                                    </StyledTextBrand>
                                    <StyledPrice>
                                        R${parseFloat(filteredProduct.price).toFixed(2).replace('.', ',')}
                                    </StyledPrice>
                                    <StyledGreenButton onClick={() => { this.props.addItemToCart(filteredProduct._id) }}>ADICIONAR AO CARRINHO</StyledGreenButton>
                                    {filteredProduct.stock <= 5 && filteredProduct.stock >= 2 ? <StyledMessage> Últimas {filteredProduct.stock} unidades   </StyledMessage> : null}
                                    {filteredProduct.stock === 1 ? <StyledMessage> Última unidade!   </StyledMessage> : null}
                                </ StyledCardProduct>

                            )
                        })
                        }
                        {this.state.listOfProducts.filter(product => {
                            return (product._id === "5e7cab8793d2160024e67013")
                        }).map(filteredProduct => {
                            return (
                                <StyledCardProduct key={filteredProduct._id}>
                                    <Link to={`/products/${filteredProduct._id}`}>
                                        <img src={filteredProduct.imageUrl} alt={filteredProduct.title && filteredProduct.brand}></img>
                                    </Link>
                                    <StyledTextTitle>{filteredProduct.name}</StyledTextTitle>
                                    <StyledTextBrand>
                                        {filteredProduct.brand}
                                    </StyledTextBrand>
                                    <StyledPrice>
                                        R${parseFloat(filteredProduct.price).toFixed(2).replace('.', ',')}
                                    </StyledPrice>
                                    <StyledGreenButton onClick={() => { this.props.addItemToCart(filteredProduct._id) }}>ADICIONAR AO CARRINHO</StyledGreenButton>
                                    {filteredProduct.stock <= 5 && filteredProduct.stock >= 2 ? <StyledMessage> Últimas {filteredProduct.stock} unidades   </StyledMessage> : null}
                                    {filteredProduct.stock === 1 ? <StyledMessage> Última unidade!   </StyledMessage> : null}
                                </ StyledCardProduct>

                            )
                        })
                        }
                        {this.state.listOfProducts.filter(product => {
                            return (product._id === "5e7ca7f293d2160024e6700e")
                        }).map(filteredProduct => {
                            return (
                                <StyledCardProduct key={filteredProduct._id}>
                                    <Link to={`/products/${filteredProduct._id}`}>
                                        <img src={filteredProduct.imageUrl} alt={filteredProduct.title && filteredProduct.brand}></img>
                                    </Link>
                                    <StyledTextTitle>{filteredProduct.name}</StyledTextTitle>
                                    <StyledTextBrand>
                                        {filteredProduct.brand}
                                    </StyledTextBrand>
                                    <StyledPrice>
                                        R${parseFloat(filteredProduct.price).toFixed(2).replace('.', ',')}
                                    </StyledPrice>
                                    <StyledGreenButton onClick={() => { this.props.addItemToCart(filteredProduct._id) }}>ADICIONAR AO CARRINHO</StyledGreenButton>
                                    {filteredProduct.stock <= 5 && filteredProduct.stock >= 2 ? <StyledMessage> Últimas {filteredProduct.stock} unidades   </StyledMessage> : null}
                                    {filteredProduct.stock === 1 ? <StyledMessage> Última unidade!   </StyledMessage> : null}
                                </ StyledCardProduct>

                            )
                        })
                        }
                        {this.state.listOfProducts.filter(product => {
                            return (product._id === "5e7c9d5993d2160024e66ffe")
                        }).map(filteredProduct => {
                            return (
                                <StyledCardProduct key={filteredProduct._id}>
                                    <Link to={`/products/${filteredProduct._id}`}>
                                        <img src={filteredProduct.imageUrl} alt={filteredProduct.title && filteredProduct.brand}></img>
                                    </Link>
                                    <StyledTextTitle>{filteredProduct.name}</StyledTextTitle>
                                    <StyledTextBrand>
                                        {filteredProduct.brand}
                                    </StyledTextBrand>
                                    <StyledPrice>
                                        R${parseFloat(filteredProduct.price).toFixed(2).replace('.', ',')}
                                    </StyledPrice>
                                    <StyledGreenButton onClick={() => { this.props.addItemToCart(filteredProduct._id) }}>ADICIONAR AO CARRINHO</StyledGreenButton>
                                    {filteredProduct.stock <= 5 && filteredProduct.stock >= 2 ? <StyledMessage> Últimas {filteredProduct.stock} unidades   </StyledMessage> : null}
                                    {filteredProduct.stock === 1 ? <StyledMessage> Última unidade!   </StyledMessage> : null}
                                </ StyledCardProduct>

                            )
                        })
                        }
                       
                    </StyledContainer>
                </StyledSection>
                <StyledSection>
                    <StyledTitle><span>PRODUTOS POR CATEGORIA</span></StyledTitle>
                    <StyledContainer>

                        <Card>
                            <Link to='/perfumes' style={{ textDecoration: 'none' }}>
                                <p>Colônias e aromaterapia</p>
                                <img src="/images/perfume3.jpg" alt="perfume"></img>
                            </Link>
                        </Card>
                        <Card>
                            <Link to='/hair' style={{ textDecoration: 'none' }}>
                                <p>Cabelos</p>
                                <img src="/images/cachos.jpg" alt="cabelos"></img>
                            </Link>
                        </Card>

                        <Card>
                            <Link to='/body' style={{ textDecoration: 'none' }}>
                                <p>Cuidados com o corpo</p>
                                <img src="/images/corpo.jpg" alt="creme hidratante"></img>
                            </Link>
                        </Card>

                        <Card>
                            <Link to='/makeup' style={{ textDecoration: 'none' }}>
                                <p>Maquiagem</p>
                                <img src="/images/maquiagem_batom_laranja.jpg" alt="maquiagem"></img>
                            </Link>
                        </Card>
                        <Card>
                            <Link to='/bath' style={{ textDecoration: 'none' }}>
                                <p>Higiene</p>
                                <img src="/images/banho.jpg" alt="produtos banho"></img>
                            </Link>
                        </Card>
                        <Card>
                            <Link to='/face' style={{ textDecoration: 'none' }}>
                                <p>Cuidados com o rosto</p>
                                <img src="/images/rosto.jpg" alt="duas mãos de duas pessoas segurando um pequeno frasco"></img>
                            </Link>
                        </Card>
                    </StyledContainer>
                </StyledSection>
            </StyledDisplay>
        )

    }
}

export default Home;