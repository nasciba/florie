import React, { Component } from 'react';
import {
    StyledDisplay, StyledTitle, StyledHeader, StyledSection, StyledContainer, StyledBox, Card
} from './styles'

class Home extends Component {


    render() {
        return (
            <StyledDisplay>
                <StyledHeader>
                    <StyledBox>
                        <p>confira nossos produtos em destaque</p>
                        <img src="/images/home2.jpg" alt="fotografia de uma mulher de perfil, com pôr do sol e o mar ao fundo"></img>
                    </StyledBox>
                </StyledHeader>
                <StyledSection>
                    <StyledTitle><span>PRODUTOS POR CATEGORIA</span></StyledTitle>
                    <StyledContainer>
                        <Card>
                            <p>Cuidados com a pele</p>
                            <img src="/images/corpo.jpg" alt="creme hidratante"></img>
                        </Card>
                        <Card>
                            <p>Maquiagem</p>
                            <img src="/images/maquiagem_batom_laranja.jpg" alt="maquiagem"></img>
                        </Card>
                        <Card>
                            <p>Perfumes</p>
                            <img src="/images/perfume.jpg" alt="perfume"></img>
                        </Card>

                        <Card>
                            <p>Cabelos</p>
                            <img src="/images/cachos.jpg" alt="cabelos"></img>
                        </Card>
                        <Card>
                            <p>Corpo e banho</p>
                            <img src="/images/banho.jpg" alt="produtos banho"></img>
                        </Card>
                        <Card>
                            <p>Dermocosméticos</p>
                            <img src="/images/dermocosmeticos.jpg" alt="duas mãos de duas pessoas segurando um pequeno frasco"></img>
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