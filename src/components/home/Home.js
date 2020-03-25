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
                        <p>Lorem ipsulum sit amet ipsulum...</p>
                        <img src="/images/home-pic.jpg "></img>
                    </StyledBox>
                </StyledHeader>
                <StyledSection>
                    <StyledTitle><span>PRODUTOS POR CATEGORIA</span></StyledTitle>
                    <StyledContainer>
                        <Card>
                            <p>Cuidados com a pele</p>
                            <img src="/images/corpo.jpg"></img>
                        </Card>
                        <Card>
                            <p>Maquiagem</p>
                            <img src="/images/maquiagem_batom_laranja.jpg"></img>
                        </Card>
                        <Card>
                            <p>Perfumes</p>
                            <img src="/images/perfume.jpg "></img>
                        </Card>

                        <Card>
                            <p>Cabelos</p>
                            <img src="/images/cachos.jpg "></img>
                        </Card>
                        <Card>
                            <p>Corpo e banho</p>
                            <img src="/images/banho.jpg "></img>
                        </Card>
                        <Card>
                            <p>Dermocosméticos</p>
                            <img src="/images/dermocosmeticos.jpg "></img>
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