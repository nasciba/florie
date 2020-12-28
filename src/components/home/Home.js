import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardProduct from '../products-card/CardProduct.js'
import Footer from '../footer/Footer'
import {
    StyledDisplay, StyledTitle, StyledHeader, StyledSection, StyledProductsContainer, StyledBox, Card
} from './styles'



class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <StyledDisplay>
                    <StyledHeader>
                        <StyledBox>
                            <Link to='/catalog'>
                                <p>os melhores cosméticos <br/> <span>orgânicos</span> e <span>veganos</span></p>
                            </Link>
                        </StyledBox>
                    </StyledHeader>
                    <StyledSection>
                        <StyledTitle><span>DESTAQUES</span></StyledTitle>
                        <StyledProductsContainer>
                            {this.props.listOfProducts.filter(product => {
                                return this.props.highlitedProducts.includes(product._id)
                            }).map(productFound => {
                                return (
                                    <CardProduct 
                                    product={productFound} 
                                    addItemToCart={this.props.addItemToCart} 
                                    key={productFound._id} 
                                    />
                                )
                            })}
                        </StyledProductsContainer>
                    </StyledSection>
                    <StyledSection>
                        <StyledTitle><span>CATEGORIAS</span></StyledTitle>
                        <StyledProductsContainer>
                            <Card>
                                <Link to='/perfumes'>
                                    <h3>COLÔNIAS E AROMATERAPIA</h3>
                                    <img src={require("./images/perfume3.jpg")} alt="perfume"></img>
                                </Link>
                            </Card>
                            <Card>
                                <Link to='/hair'>
                                    <h3>CABELOS</h3>
                                    <img src={require("./images/cachos.jpg")} alt="cabelos"></img>
                                </Link>
                            </Card>
                            <Card>
                                <Link to='/body'>
                                    <h3>CORPO</h3>
                                    <img src={require("./images/corpo.jpg")} alt="creme hidratante"></img>
                                </Link>
                            </Card>
                            <Card>
                                <Link to='/makeup'>
                                    <h3>MAQUIAGEM</h3>
                                    <img src={require("./images/maquiagem_batom_laranja.jpg")} alt="maquiagem"></img>
                                </Link>
                            </Card>
                            <Card>
                                <Link to='/bath'>
                                    <h3>HIGIENE</h3>
                                    <img src={require("./images/banho.jpg")} alt="produtos banho"></img>
                                </Link>
                            </Card>
                            <Card>
                                <Link to='/face'>
                                    <h3>ROSTO</h3>
                                    <img src={require("./images/rosto.jpg")} alt="duas mãos de duas pessoas segurando um pequeno frasco"></img>
                                </Link>
                            </Card>
                        </StyledProductsContainer>
                    </StyledSection>
                </StyledDisplay>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home;