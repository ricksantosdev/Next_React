import React , { useState, useEffect} from "react";
import './style.css';

function RequisicaoHttp(){
    const [nutri, setNutri] = useState([]);

    useEffect(() => {

        function loadApi(){
            let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

            fetch(url)
            .then((result) => result.json())
            .then((json) => {
                setNutri(json);
            })
        }

        loadApi();
    } , [])
    
    
    return(
        <div className="container">
            <header>
                <strong>React Nutri</strong>
            </header>
            {nutri.map((item) => {
                return(
                    <article key={item.id} className="post">
                        <strong className="titulo">{item.titulo}</strong>
                    </article>
                )
            } )}
        </div>

    );
}


export default RequisicaoHttp;