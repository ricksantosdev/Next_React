import  styled  from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    height: 500px;
`;

export const Head = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: brown;

    a{
        font-size: 50px;
        color: blue;
    }

`;


export const Titulo = styled.h1`
    color: ${props => `#${props.cor}`} ;
    font-size: ${props => `${props.tamanho}px`};
    
`;
