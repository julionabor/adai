import { BrowserRouter as  Router, Routes,Route } from 'react-router-dom';

import styles from './components/layout/Container.module.css';

import Navbar from './components/layout/Navbar';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
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


function App() {
  return (
    <div>
      <Router>
        <Navbar />
          <Container className={styles.container}>
            <Routes>
            <Route path="/" element={<Home />}></Route>
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
          </Routes>
        </Container>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
