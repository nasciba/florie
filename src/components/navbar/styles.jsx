import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    max-height: 14vh;
    width: 100%;
    background-color: white;
    margin-top: 0;
    padding-top: 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; 
    a {
        margin-right: auto;
        img {
             width: 69%; 
        };
    }
    ul {
        margin-left: auto;
        display: flex;
        padding: 0;
        height: 40px;
        flex-direction: row;
        list-style: none;
        justify-content: space-around;
        align-items: center;
        width: 20%;
        height: 100%;
        background: white;     
        li {
            a {
                text-decoration: none;
                font-size: 19px;
                margin: 12px

            }
            span {
                background: red;
                padding: 2px 5px;
                color: white;
                border-radius: 100%;
                font-size: 15px;
            }
        };
    };
    @media(max-width: 768px) {
        position: relative;
        width: 100%;
        justify-content: left;
        align-items: left;
        a {
            img {
                max-width: 40%;
            }
        };
        
        ul {
            position:fixed;
            background: pink;
            height: 100vh;
            max-width: 70%;
            flex-direction: column;
            display: none;
            clip-path: circle(100px at 90% -10%);
            -webkit-clip-path: circle(1000px at 90% -10%);
            transition: all 1s ease-out;
        }
    };
`

const Hamburger = styled.div`
        @media(max-width: 768px) {
        position: absolute;
        cursor: pointer;
        right: 5%;
        top: 50%;
        transform: translate(-5%, -50%);
    }
`

const Line = styled.div`
    @media(max-width: 768px) {
    width: 30px;
    height: 3px;
    background: black;
    margin: 5px;
}
    

`
export {
    Nav,
    Hamburger,
    Line
}