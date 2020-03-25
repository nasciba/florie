import React, { Component } from 'react';
import { StyledFooter } from './styles'

export default class Footer extends Component {
    render() {
        return (
            <StyledFooter>
                <footer>
                    <div>
                        <p>florie store</p>
                        <p>rua alameda jaú, 1301</p>
                        <p>são paulo - sp</p> 
                        <p>cep: 01420-903</p> 
                        <p><i class="fa fa-envelope" style={{ color: "white" }}></i> florie@gmail.com</p>
                        <p><i class="fa fa-phone" style={{ color: "white" }}></i> (31)98500-2551</p>
                    </div>
                </footer>
            </StyledFooter >
        )
    }
}
