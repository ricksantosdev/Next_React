import { useState } from "react";

function Imc(){

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    let [imc , setImc] = useState('');

    return(
        <form onSubmit={CalculaImc}>
            <label>Informe sua altura:</label> <br/>
            <input type="text" placeholder="Digite sua altura" 
            onChange={(e) => handleInputAltura(e.target.value)}
            /> <br/>

           <label>Informe seu peso:</label> <br/>
           <input type="text" placeholder="Digite seu peso"
           onChange={(e) => handleInputPeso(e.target.value)}
           /> <br/>

           <button type="submit" >
              Calcule IMC 
           </button>
           <br/>

           <span>O valor do seu IMC é: 
            {imc}
           </span>
        </form>
    );


    function handleInputAltura(altura){
        setAltura(altura);
    }

    function handleInputPeso(peso){
        setPeso(peso);
    }



    function CalculaImc(e){
        e.preventDefault();

        imc = (peso * altura) / 2;
        alert('funcionando');
    }
}


export default Imc;