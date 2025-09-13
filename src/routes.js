import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Menu from "./components/Menu";

const Rotas = () => {
    return(
        <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/contato" element={<Contato/>} />
            <Route path="/sobre" element={<Sobre/>} />
        </Routes>       
        </BrowserRouter>
    )
}


export default Rotas;