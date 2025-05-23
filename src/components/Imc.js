import { useState } from "react";

function Imc(){

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc , setImc] = useState('');

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

        let imcCalculo = peso / (altura * altura) ;
        let resultadoImc = '';

        if(imcCalculo < 18.5){
            resultadoImc = 'Abaixo do peso normal';
        }else if (imcCalculo >= 18.5 && imcCalculo < 24.9){
            resultadoImc = 'Peso normal';
        }else if (imcCalculo >= 24.9 && imcCalculo < 29.9){
            resultadoImc = 'Excesso de peso';
        }else if(imcCalculo >= 29.9 && imcCalculo < 34.9){
            resultadoImc = 'Obesidade classe I';
        }else if(imcCalculo >= 34.9 && imcCalculo < 39.9){
            resultadoImc = 'Obesidade classe II';
        }else if(imcCalculo >= 39.9){
            resultadoImc = 'Obesidade classe III'
        }
        
        setImc(resultadoImc);

    }
}


export default Imc;