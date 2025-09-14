import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Imc from './components/Imc';
import CadastroUsuario from './components/CadastroUsuario';
import CadastroTarefas from './components/CadastroTarefas';
import RequisicaoHttp from './components/RequisicaoHttp';
import AppStyleComponent from './AppStyleComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppStyleComponent />
  </React.StrictMode>
);


