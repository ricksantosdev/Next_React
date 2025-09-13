
import { useState } from "react";
import react from "react";


function ApplicationCadastraTarefas() {

  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState('');



  function handleInputTarefa(param) {
    setInput(param);
  }


  function handleRegister(event) {
    event.preventDefault();
    alert('cadastrando suas tarefas');

    setTarefas([
      ...tarefas, input
    ])

    setInput('');
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <h1>Listas de tarefas</h1>
        <label>Tarefa:</label><br />
        <input type="text" value={input} placeholder="Digite sua tarefa"
          onChange={(e) => handleInputTarefa(e.target.value)} /> <br />

        <button type="submit">
          Cadastrar
        </button>
        <br />

        <ul>
          {tarefas.map(tarefa => (
            <li key={tarefa}> {tarefa} </li>
          ))}
        </ul>


      </form>

    </div>


  );
}

export default ApplicationCadastraTarefas;

