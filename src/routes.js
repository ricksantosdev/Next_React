import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Menu from "./components/Menu";
import Erro from "./pages/Erro";
import Produto from "./pages/Produto";

const Rotas = () => {
    return(
        <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route exact path="/contato" element={<Contato/>} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="*" element={<Erro/>} />
            <Route path="/produto/:id" element={<Produto/>}/>
        </Routes>       
        </BrowserRouter>
    )
}


export default Rotas;