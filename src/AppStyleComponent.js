import styled from "styled-components";
import { Container , Head, Titulo} from "./style";

export default function AppStyleComponent(){
    return(
        <Container>
            <Head>
                <a>Projeto Estilizado com Style Component</a>
            </Head>
            <Titulo cor="FF0000" tamanho={300}>
                Srja bem vindo
            </Titulo>
        </Container>
    );
}