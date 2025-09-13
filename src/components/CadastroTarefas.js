import { useState, useEffect } from "react";

function CadastroTarefas(){

const [input, setInput] = useState('');
const[tarefas, setTarefas] = useState([
    'Primeira tarefa',
    'Segunda tarefa'
]);

useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefas');
    if(localStorage){
        setTarefas(JSON.parse(tarefasStorage));
    }

},[])



//Comentário no código
//cada vez que ele adicionar item na lista ele salvara no localstorage...hook useEffect garante isto
useEffect(() => {
    localStorage.setItem('@tarefas',JSON.stringify(tarefas));
}, [tarefas]);


return(

    <form onSubmit={HandleSubmit}>
        <div>
            <span> Digite uma tarefa a ser incluida:</span>
            <input type="text"
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite aqui a tarefa"
            />
            <button type="submit">
                Registrar tarefa
            </button>
        </div>
        <div>
            <ul>
                {tarefas.map( tarefa => (
                    <li key={tarefa}> {tarefa} </li>)              
                )}

            </ul>

        </div>
    </form>

);


function HandleSubmit(e){
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('');

}


}


export default CadastroTarefas;

