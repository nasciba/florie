import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardProduct from '../products-card/CardProduct.js'
import Footer from '../footer/Footer'
import {
    StyledDisplay, StyledTitle, StyledHeader, StyledSection, StyledContainer, StyledBox, Card
} from './styles'



class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <StyledDisplay>
                    <StyledHeader>
                        <StyledBox>
                            <Link to='/catalog'><p>os melhores cosméticos <span style={{ color: '#26acb5' }}>orgânicos</span></p></Link>
                            <img src="/images/home2.jpg" alt="rosas"></img>
                        </StyledBox>
                    </StyledHeader>
                    <StyledSection>
                        <StyledTitle><span>DESTAQUES</span></StyledTitle>
                        <StyledContainer>
                            {this.props.listOfProducts.filter(product => {
                                return this.props.highlitedProducts.includes(product._id)
                            }).map(productFound => {
                                return (
                                    <CardProduct product={productFound} addItemToCart={this.props.addItemToCart} key={productFound._id} />

                                )
                            })}
                        </StyledContainer>
                    </StyledSection>
                    <StyledSection>
                        <StyledTitle><span>PRODUTOS POR CATEGORIA</span></StyledTitle>
                        <StyledContainer>

                            <Card>
                                <Link to='/perfumes'>
                                    <p>Colônias e aromaterapia</p>
                                    <img src="/images/perfume3.jpg" alt="perfume"></img>
                                </Link>
                            </Card>
                            <Card>
                                <Link to='/hair'>
                                    <p>Cabelos</p>
                                    <img src="/images/cachos.jpg" alt="cabelos"></img>
                                </Link>
                            </Card>

                            <Card>
                                <Link to='/body'>
                                    <p>Cuidados com o corpo</p>
                                    <img src="/images/corpo.jpg" alt="creme hidratante"></img>
                                </Link>
                            </Card>

                            <Card>
                                <Link to='/makeup'>
                                    <p>Maquiagem</p>
                                    <img src="/images/maquiagem_batom_laranja.jpg" alt="maquiagem"></img>
                                </Link>
                            </Card>
                            <Card>
                                <Link to='/bath'>
                                    <p>Higiene</p>
                                    <img src="/images/banho.jpg" alt="produtos banho"></img>
                                </Link>
                            </Card>
                            <Card>
                                <Link to='/face'>
                                    <p>Cuidados com o rosto</p>
                                    <img src="/images/rosto.jpg" alt="duas mãos de duas pessoas segurando um pequeno frasco"></img>
                                </Link>
                            </Card>
                        </StyledContainer>
                    </StyledSection>
                </StyledDisplay>
                <Footer />
            </React.Fragment>
        )

    }
}

export default Home;