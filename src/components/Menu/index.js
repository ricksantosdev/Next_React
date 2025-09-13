import { Link } from "react-router-dom";

export default function Menu() {
return(
    <ul>
        <li> <Link to="/home">Home</Link> </li>
        <li> <Link to="/contato">Contato</Link> </li>
        <li> <Link to="/sobre">Sobre</Link> </li>
    </ul>
    
);
}