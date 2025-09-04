import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Imc from './components/Imc';
import CadastroUsuario from './components/CadastroUsuario';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CadastroUsuario />
  </React.StrictMode>
);


