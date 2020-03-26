import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    StyledDisplay, StyledTitle, StyledHeader, StyledSection, StyledContainer, StyledBox, Card
} from './styles'

class Home extends Component {

    render() {
        return (
            <StyledDisplay>
                <StyledHeader>
                    <StyledBox>
                        <Link to='/catalog' style={{ textDecoration: 'none', color: 'black' }}><p>confira nossos produtos em destaque</p></Link>
                        <img src="/images/home2.jpg" alt="fotografia de uma mulher de perfil, com pôr do sol e o mar ao fundo"></img>
                    </StyledBox>
                </StyledHeader>
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
                <StyledSection>
                    <StyledTitle><span>DESTAQUES</span></StyledTitle>
                    <StyledContainer>
                        <h1>Inserir 6 produtos</h1>
                    </StyledContainer>
                </StyledSection>
            </StyledDisplay>
        )

    }
}

export default Home;