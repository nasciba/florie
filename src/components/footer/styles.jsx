import styled from 'styled-components'

const StyledFooter = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    margin-top: 50px;
    background-color: white;
    bottom: 0;
    footer {    
        background-color: black;
        min-height: 10.5rem;
        width: 100%;
        padding-bottom: 25px;
        margin-bottom: 0;
        color: white;
        position: absolute;
        div {
            padding: 20px  35px;
        }
    
        p {
            margin: 20px;
            font-family: 'Roboto', sans-serif;
            // font-family: 'Playfair Display', serif;
            font-size: 24px;
            letter-spacing: 8px;
            color:#26acb5;
            font-weight: light;
     }
    }

    `

export {
    StyledFooter,
}