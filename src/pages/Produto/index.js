import { useParams } from "react-router-dom";

export default function Produto(){
    const params = useParams();  //usando o useParams para pegar o valor da informado como parametro da rota
    //console.log(id);
    return (
        <div>
            <header>
                <span> O parâmetro informado é: {params.id} </span>
            </header>
        </div>
    );
}