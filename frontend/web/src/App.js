import Imovel from './componentes/Imovel';
import Login from './componentes/Login';
import Cadastro from './componentes/Cadastro';
import EdicaoIm from './componentes/Imovel/edicaoIm'
import Home from './componentes/Home';
import Novo from './componentes/Imovel/novo';
import Inicial from './componentes/inicial';
import { Routes, Route } from "react-router-dom";
import './App.css'
import ParametrizacaoCriar from "./componentes/ParametrizacaoCriar";
import ParametrizacaoAlterar from "./componentes/ParametrizacaoAlterar";
import Interesse from './componentes/Interesse';



function App() {

  return (
    <div>
      <Routes>
        {/* Componente da tela inicial */}
        <Route index element={<Inicial />} />
        {/* Componente de uma rota específica */}
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home/>} />
        <Route path="imovel" element={<Imovel />} />
        <Route path="cadastro" element={<Cadastro />}/>
        <Route path="edicaoIm/:id" element={<EdicaoIm />} />
        <Route path="novo" element={<Novo />} />
        <Route path="parametrizacaocriar" element={<ParametrizacaoCriar />}/>
        <Route path="parametrizacaoalterar" element={<ParametrizacaoAlterar/>}/>
        <Route path="regInteresse/:id" element={<Interesse/>}/>

        {/* Componente para quando não encontrar uma rota
        <Route path="*" element={<NotFound />} />*/}
      </Routes>
    </div>
    
  );
}

export default App;
