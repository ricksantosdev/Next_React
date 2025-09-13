import { Link } from "react-router-dom";

export default function Sobre(){
    return(
        <div>
            <h1> Página Sobre a empresa</h1>
            <Link to="/home">Home</Link> <br/>
            <Link to="/contato">Contatos</Link>
        </div>
    );
}