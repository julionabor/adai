import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Futebol from './components/pages/Futebol';
import Patrocinadores from './components/pages/Patrocinadores';
import Associar from './components/pages/Associar';
import Jogadores from './components/pages/futebol/Jogadores';
import Comissao from './components/pages/futebol/Comissao';
import Diretoria from './components/pages/futebol/Diretoria';
import Galeria from './components/pages/futebol/Galeria';
import Jogos from './components/pages/futebol/Jogos';
import Index from './components/pages/Index'
import PlanoIndividual from './components/pages/PlanoIndividual';
import PlanoFamiliar from './components/pages/PlanoFamiliar';
function Rota(){
  return(
          <Router> 
          
            <Routes>
              <Route path="/" index element={<Index />}></Route>
              <Route path="/home" index element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/futebol" element={<Futebol />}></Route> 
              <Route path="/associar" element={<Associar />}></Route>
              <Route path="/patrocinadores" element={<Patrocinadores />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/jogadores" element={<Jogadores />}></Route>
              <Route path="/comissao" element={<Comissao />}></Route>
              <Route path="/diretoria" element={<Diretoria />}></Route>
              <Route path="/galeria" element={<Galeria />}></Route>
              <Route path="/jogos" element={<Jogos />}></Route>
              <Route path="/associar/individual" element={<PlanoIndividual />}></Route>
              <Route path="/associar/familiar" element={<PlanoFamiliar />}></Route>
            </Routes>
          
        </Router>
  );
}
export default Rota