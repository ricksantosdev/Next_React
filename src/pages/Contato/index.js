import { Link } from "react-router-dom";

export default function Contato(){
    return(
        <div>
            <h1> Página Contato</h1>
            <span>teste@teste.com</span>
            <Link to="/sobre">Sobre</Link>  <br/>
            <Link to="/home">Contatos</Link>
        </div>
    );
}