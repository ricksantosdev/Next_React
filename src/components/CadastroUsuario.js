import { useState } from "react";


function CadastroUsuario() {

    const [nome , setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');


    return (
        <form onSubmit={CadastrarUsuario}>
            <label> Informe seu nome:</label> <br/>
            <input type="text" placeholder="Digite seu nome"
            onChange={(x) => ManipularNome(x.target.value)}
            /> <br/>

            <label>Digite sua idade:</label> <br/>
            <input type="text" placeholder="Digite sua idade"
            onChange={(x) => ManipularIdade(x.target.value)}
            /> <br/>

            <label>Digite seu email:</label> <br/>
            <input type="text" placeholder="Digite seu email:"
                onChange={(x) => ManipularEmail(x.target.value)}
            /> <br/>

            <label>Digite seu celular:</label> <br/>
            <input type="text" placeholder="Digite o número do seu celular"
                onChange={(x) => ManipularCelular(x.target.value)}
            /> <br/>


            <button type="submit">
                Cadastrar
            </button>

            <br/>

            <span>Nome: {nome} </span>  <br/>
            <span>Idade: {idade} </span> <br/>
            <span>Celular: {celular} </span>
            <span>Email: {email} </span>

        </form>
    );

    function CadastrarUsuario(event){
        event.preventDefault();
    }

    function ManipularNome(nome){
        setNome(nome);
    }

    function ManipularIdade(idade)
    {
        setIdade(idade);
    }

    function ManipularEmail(email){
        setEmail(email);
    }

    function ManipularCelular(celular){
        setCelular(celular);
    }


}


export default CadastroUsuario;